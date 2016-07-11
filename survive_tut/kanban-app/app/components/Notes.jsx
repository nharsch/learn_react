import React from 'react';

import Note from './Note';

export default ({notes}) => (
  <ul>{notes.map(note =>
    <li key={note.id}><Note task={note.task} /></li>
  )}</ul>
)

export default ({notes, onDelete=() => {}}) => ( // be default bind onDelete to nothing to avoid crashing
  <ul>{notes.map(({id, task}) =>
    <li key={id}>
      <Note
        // bind this to null
        onDelete={onDelete.bind(null, id)} 
        task={task} />
    </li>
    )}</ul>
)
