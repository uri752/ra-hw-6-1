import React from 'react';

export default function NoteItem ( props ) {
  const {note, removeItem} = props;

  return (
    <div className='note-item'>
      <span>{ note.content }</span>
      <button
        onClick={ () => { 
          debugger;
          removeItem(note.id)
        } }
        >x
      </button>
    </div>
  )
}
