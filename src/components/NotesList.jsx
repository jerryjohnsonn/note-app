import React from 'react';
import NoteItem from './NoteItem';

function NotesList({searchedNotes, notes, onDeleteHandler}) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        { 
          (searchedNotes ?
          searchedNotes.map((item) => (
              <NoteItem key={item.id} {...item} onDeleteHandler={onDeleteHandler} />
            )
          ) :
          notes.map((item) => (
              <NoteItem key={item.id} {...item} onDeleteHandler={onDeleteHandler} />
            )
          )) 
        }
      </div>
    </>
  )
}

export default NotesList;