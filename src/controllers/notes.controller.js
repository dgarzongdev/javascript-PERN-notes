const express = require('express');
const pool = require('../db');

const getAllNotes = async (req, res) => {
    try {
        const allNotes = await pool.query('SELECT * FROM note');
        res.send(allNotes.rows);
    } catch (error) {
        res.json(error.message);
    }
};

const getNote = async (req, res) => {
    try {
        const { id } = req.params;
        const findNote = await pool.query('SELECT * FROM note WHERE id = $1', [id])
        if (findNote.rows.length === 0) return res.status(404).json({
            message: "Task not found",
        });
        console.log(findNote);
        res.json(findNote.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

const createNote = async (req, res) => {
    // Get the form data
    const { title, description } = req.body;
    try {
        const result = await pool.query('INSERT INTO note (title, description) VALUES ($1, $2)', [title, description]);

        console.log(result);

        res.send('Create Note');
    } catch (error) {
        console.log(error.message);
        res.json({ error: error.message });
    }

};

const updateNote = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;

        const upNote = await pool.query('UPDATE note SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
        console.log(upNote);
        
        return res.json(upNote.rows[0]);

    } catch (error) {
        console.log(error.message)
        res.json({
            error: error.message
        });
    }
};

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const delNote = await pool.query('DELETE FROM note WHERE id = $1', [id]);
        
        if (delNote.rows === 0)
        return res.status(404).json({
            message:"not found",
        });

        return res.sendStatus(204);
    } catch (error) {
        res.json(error.message);
    }
    
};

module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
}