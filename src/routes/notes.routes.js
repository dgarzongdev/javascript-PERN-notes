const { Router } = require('express');
const { getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote 
} = require('../controllers/notes.controller');

const router = Router();

router.get('/notes', getAllNotes);

router.get('/note/47', getNote);

router.post('/notes', createNote);

router.put('/notes',updateNote);

router.delete('/notes', deleteNote);

module.exports = router;