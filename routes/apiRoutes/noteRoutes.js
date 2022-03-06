const router = require('express').Router();

// notes history stored as json object
const { notes } = require('../../db/db.json');

// creates or deletes a note
const { saveNote, deleteNote } = require('../../lib/noteFunction');

//save note history json db
router.get('/api/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

router.post('/api/notes', (req, res) => {
    //req.body holds parameters that are sent from client as POST request
    req.body.id = notes.length.toString();
    let note = saveNote(req.body, notes);
    res.json(note);
});

router.delete('/api/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});

module.exports = router;