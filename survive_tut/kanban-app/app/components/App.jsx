import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes : [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do Laundry'
        }
      ]
    };
  }
  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>

        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  deleteNote = (id, e) => {
    // avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      // filter clause: note isn't the note id we want to delete
      notes: this.state.notes.filter(note => note.id !== id) 
    });
  }

  activateNoteEdit = (id) => {
    this.setState({
      // just set edit state to true
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }
        return note;
      })
    });
  }
  // ie - complete editing
  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          // update note with body info
          note.task = task;
        }
        return note;
      })
    });
  }
}
