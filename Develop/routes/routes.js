const fs = require('fs');
const path = require('path');

module.exports = app => {

    // notes variable setup
    fs.readFile("db/db.json", "uft8", (err, data) => {

        if (err) throw err;

        const notes = JSON.parse(data);

        // API routes
        // ===========================================

        // api/notes get route

        app.get("/api/notes", (req,res) => {
            // reads db.json and returns saved notes as JSON
            res.json(notes);
        });

        // api/notes post route
        app.post("/api/notes", (req, res) => {
            // receives new note and adds to db.json
            // then returns new note
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("Added new note: "+newNote.title);
        });

        // retrieves note with specific id
        app.get("/api/notes/:id", (req, res) => {
            // display json for notes array via id
            res.json(notes[req.params.id]);
        });

        // deletes with specific id
        app.delete("api/notes/:id", (req, res) => {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Deleted note with id "+req.params.id);
        });

        // view routes
        // ===========================

        // display notes.html when /notes is accessed
        app.get('/notes', (req,res) => {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        // updates json file whenever a note is added or deleted
        function updateDb() {
            fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;
            });
        }
    });
}