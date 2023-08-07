import noteController from './notes.js';

if (window.location.pathname === '/notes') {
   saveNoteBtn.addEventListener('click', handleNoteSave);
    newNoteBtn.addEventListener('click', handleNewNoteView);
    noteTitle.addEventListener('keyup', handleRenderSaveBtn);
    noteText.addEventListener('keyup', handleRenderSaveBtn);
}

noteController.getAndRenderNotes();
