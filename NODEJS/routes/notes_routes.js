  
const express = require('express');

const notesController = require('../controllers/notes.js');

const router = express.Router();

router.get('/notes', notesController.getAllNotes);

router.post('/notes', notesController.postNotes);

router.put('/notes', notesController.putNotes);

router.delete('/notes/:id', notesController.deleteNotes);

module.exports = router;