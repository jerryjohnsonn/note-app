import React from 'react';
import NoteAppHeader from './NoteAppHeader';
import NoteAppBody from './NoteAppBody';
import { getInitialData as data } from '../utils';

class NoteApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      notes: data(),
      searchedNotes: null,
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.addingNoteHandler = this.addingNoteHandler.bind(this);
    this.searchingNoteHandler = this.searchingNoteHandler.bind(this);
  }

  onDeleteHandler(id){
    // Delete ketika searchBar tidak ada input dan ketika ada input
    const notes = this.state.notes.filter(note => note.id !== id);
    // const searchedNote = this.state.searchedNotes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  searchingNoteHandler(title){
    if(title) {
      const searchedNotes = this.state.notes.filter(note => (note.title.toLowerCase()).includes(title.toLowerCase()));
      this.setState({ searchedNotes: searchedNotes })
      console.log("Bagian Searched Notes");
      console.log(this.state.searchedNotes);
    } else {
      this.setState({ searchedNotes: null })
    }
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
            createdAt: new Date(),
            archived: false,
          }
        ]
      }
    })
    console.log(this.state.notes);
  }

  render(){
    return (
      <div className="note-app">
        <NoteAppHeader searchingNoteHandler={this.searchingNoteHandler}/>
        <NoteAppBody searchedNotes={this.state.searchedNotes} notes={this.state.notes} onDeleteHandler={this.onDeleteHandler} addingNewNoteHandler={this.addingNoteHandler}/> 
      </div>
    )
  }
}

export default NoteApp;