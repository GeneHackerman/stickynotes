const router = require('express').Router();

// notes history stored as json object
const { notes } = require('../../db/db');

// creates or deletes a note
const { noteCreateNewNote, noteDeleteNote } = require('./lib/notefunctions');

//save note history json db
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
});

router.post('/notes', (req, res) => {
    //req.body holds parameters that are sent from client as POST request
    req.body.id = notes.length.toString();
    let note = noteCreateNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    noteDeleteNotes(notes, req.params.id);
    res.json(notes);
});

module.exports = router;