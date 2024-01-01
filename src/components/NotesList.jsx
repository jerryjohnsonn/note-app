import React from 'react';
import NoteItem from './NoteItem';

function NotesList({notes, onDeleteHandler}) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {
          notes.map((item) => {
            return (
            <NoteItem key={item.id} {...item} onDeleteHandler={onDeleteHandler} />
            )
          })
        }
      </div>
    </>
  )
}

export default NotesList;