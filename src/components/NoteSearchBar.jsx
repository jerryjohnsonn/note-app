import React from 'react';

class NoteSearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      searchBarValue: '',
    }

    this.searchBarValueOnChanged = this.searchBarValueOnChanged.bind(this);
  }

  searchBarValueOnChanged(event) {
    const inputValue = event.target.value;
    this.setState(() => {
      return {
        searchBarValue: inputValue
      };
    });
  
    this.props.searchingNoteHandler(inputValue);
  }

  render() {
    return(
      <input type="text" placeholder='Cari catatan...' value={this.state.searchBarValue} onChange={this.searchBarValueOnChanged} />
    )
  }
}

export default NoteSearchBar;