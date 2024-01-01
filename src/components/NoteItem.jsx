import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItem({id, title, body, createdAt, onDeleteHandler}){
  return (
    <div className="note-item">
      <div className="note-item__content">
        <div className="note-item__title">
          {title}
        </div>
        <div className="note-item__date">
          {showFormattedDate(createdAt)}
        </div>
        <div className="note-item__body">
          {body}
        </div>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDeleteHandler(id)}>Delete</button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  )
}

export default NoteItem;