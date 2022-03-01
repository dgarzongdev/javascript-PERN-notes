const { Router } = require('express');
const { getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote 
} = require('../controllers/notes.controller');

const router = Router();

router.get('/notes', getAllNotes);

router.get('/note/:id', getNote);

router.post('/note', createNote);

router.put('/note/:id',updateNote);

router.delete('/note/:id', deleteNote);

module.exports = router;