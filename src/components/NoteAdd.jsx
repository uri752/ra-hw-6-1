import React, { useState } from 'react';

export default function NoteAdd(props) {
  const { addNote } = props;
  const [note, setNote] = useState('');
  

  return (
    <div className='note-add'>        
        <label htmlFor='note' className='el'>New Note</label>
        <input className='el' id='note' value={note} onChange={ e => setNote(e.target.value)}></input>
        <button className='el' onClick={ () => { addNote(note); setNote(''); }}>Add Note</button>
    </div>
  )
}
