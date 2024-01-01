import React from 'react';

class NoteInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      characterLeft: 50,
      title: '',
      body: '',
    }

    this.titleBoxOnFilled = this.titleBoxOnFilled.bind(this);
    this.contentBoxOnFilled = this.contentBoxOnFilled.bind(this);
    this.submitButtonHandler = this.submitButtonHandler.bind(this);
  }

  titleBoxOnFilled(event){
    this.setState(() => {
      return{
        characterLeft: 50 - event.target.value.length,
        title: event.target.value
      }
    })
  }

  contentBoxOnFilled(event){
    this.setState(() => {
      return{
        body: event.target.value
      }
    })
  }

  submitButtonHandler(event){
    event.preventDefault();
    this.props.addingNewNoteHandler(this.state);
    document.querySelectorAll('.input').forEach(
      input => (input.value = '')
    ),
    this.setState(() => {
      return {
        body: '',
        title: '',
        characterLeft: 50
      }
    })      
  }

  render() {
    return (
    <form className="note-input" onSubmit={this.submitButtonHandler}>
      <h2>Buat Catatan</h2>
      <div className="note-input__title__char-limit">
        <span>Sisa Karakter: {this.state.characterLeft}</span>
      </div>
      <input type="text" className='note-input__title input' placeholder='Ini adalah judul...' onChange={this.titleBoxOnFilled} maxLength={50} value={this.state.noteTitle}/> 
      <textarea name="noteContent" id="noteContent" cols="30" rows="10" className='note-input__body input' placeholder='Tuliskan catatanmu disini...' onChange={this.contentBoxOnFilled} value={this.state.noteContent}></textarea>
      <button type='submit'>Buat</button>
    </form>
    )
  }
}

export default NoteInput;