const noteController = {

    handleNoteView: (e) => {
        e.preventDefault();
        activeNote = JSON.parse(e.target.parentElement.getAttribute('data-note'));
        renderActiveNote();
    },

    
}
