import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteAppBody({notes, onDeleteHandler, addingNewNoteHandler}) {
  return(
    <div className="note-app__body">
      <NoteInput addingNewNoteHandler={addingNewNoteHandler} />
      <NotesList notes={notes} onDeleteHandler={onDeleteHandler} />
    </div>
  )
}

export default NoteAppBody;