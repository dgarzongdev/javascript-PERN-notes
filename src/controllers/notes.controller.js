
const getAllNotes = async (req, res) => {
    res.send('List of notes');
};

const getNote = async (req, res) => {
    res.send('List of notes');
};

const createNote = async (req, res) => {
    res.send('Create Note');
};

const updateNote = async (req, res) => {
    res.send('Update Note');
};

const deleteNote = async (req, res) => {
    res.send('Delete Note');
};

module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
}