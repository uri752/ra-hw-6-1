import React from 'react'
import NoteItem from './NoteItem';

export default function NoteList( props ) {
  const { notes, removeItem } = props;

  return (
    <div>
        { notes.map( note => <NoteItem note={note} removeItem={removeItem}/>) }
    </div>
  )
}

