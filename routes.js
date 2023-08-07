const express = require('express');
const router = express.Router();
const {
  getNotes,
  saveNote,
  deleteNote,
} = require('./controllers/notesController');

router.get('/notes', getNotes);
router.post('/notes', saveNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;