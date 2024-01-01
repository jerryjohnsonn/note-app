import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';
import { getInitialData as data } from '../utils';

class NoteApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: data(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.addingNoteHandler = this.addingNoteHandler.bind(this);
    this.searchingNoteHandler = this.searchingNoteHandler.bind(this);
  }

  onDeleteHandler(id){
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  searchingNoteHandler(title){
    const notes = this.state.notes.filter(note => (note.title).includes === title);
    this.setState({ notes });
  }

  addingNoteHandler({title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toLocaleDateString('id-ID'),
            archived: false,
          }
        ]
      }
    })
  }

  render(){
    return (
      <div className="note-app">
        <NoteAppHeader searchingNoteHandler={this.searchingNoteHandler}/>
        <NoteAppBody notes={this.state.notes} onDeleteHandler={this.onDeleteHandler} addingNewNoteHandler={this.addingNoteHandler}/> 
      </div>
    )
  }
}

export default NoteApp;