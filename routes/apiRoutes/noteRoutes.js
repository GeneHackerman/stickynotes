const router = require('express').Router();

// notes history stored as json object
const { notes } = require('./db/db');

// creates or deletes a note
const { noteCreateNewNote, noteDeleteNote } = require('./assets/index.js');

//save note history json db
router.get('/api/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

router.post('/api/notes', (req, res) => {
    //req.body holds parameters that are sent from client as POST request
    req.body.id = notes.length.toString();
    let note = noteCreateNewNote(req.body, notes);
    res.json(note);
});

router.delete('/api/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
});

module.exports = router;