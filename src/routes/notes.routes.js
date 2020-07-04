const {Router} = require('express')
const router = Router()

// controllers
const {deleteNote, 
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote
    } = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth');

// methods
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', isAuthenticated, createNewNote);
router.get('/notes', isAuthenticated, renderNotes);
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
router.put('/notes/edit/:id', isAuthenticated, updateNote);
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;