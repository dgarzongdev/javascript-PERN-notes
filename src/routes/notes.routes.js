const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('List of notes');
});

router.post('/', (req, res) => {
    res.send('Create Note');
});

router.put('/', (req, res) => {
    res.send('Update Note');
});

router.delete('/', (req, res) => {
    res.send('Delete Note');
});

module.exports = router;