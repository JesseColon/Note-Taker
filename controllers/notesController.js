const { v4: uuidv4 } = require('uuid');

let notes = [];

const getNotes = (req, res) => {
    res.json(notes);
};

const saveNote = (req, res) => {
    const { title, text } = req.body;
    if (!title || !text) {
        return res.json({ error: 'Title and text required' });
    }

    const newNote = {
        id: uuidv4(),
        title,
        text,
    };

    notes.push(newNote);
    res.json(newNote);
};

const deleteNote = (req, res) => {
    const noteId = req.params.id;
    notes = notes.filter((note) => note.id !== noteId);
    res.json({ ok: true });
};