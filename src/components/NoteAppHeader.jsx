import React from 'react';
import NoteSearchBar from './NoteSearchBar';

function NoteAppHeader({searchingNoteHandler}){
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearchBar searchingNoteHandler={searchingNoteHandler}/>
    </div>
  )
}

export default NoteAppHeader;