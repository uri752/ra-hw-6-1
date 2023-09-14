import { useEffect, useState } from 'react';
import './App.css';
import NoteAdd from './components/NoteAdd';
import NoteList from './components/NoteList';
import NoteUpdate from './components/NotesUpdate';

function App() {
  const [notes, setNotes]= useState([]);

  async function fetchNotes() {
    let promise = fetch('http://localhost:7070/notes');
    promise.then( res => res.json())
      .then( json => setNotes(json)) //json.data
      .catch( err => {
        console.warn(err);
        alert('Ошибка получения данных с сервера');
      });
  }

  useEffect( () => {
    fetchNotes();
  },  []);

  async function removeNote(id) { 
    //удалить на сервере 
    await fetch(`http://localhost:7070/notes/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      });
      // и если вернулся успех, то удалить локально из массива
    //setNotes(notes.filter( note => note.id != id)); 
    fetchNotes();
  };

  const updateNotes = () => {
    fetchNotes();
  };

  async function addNote(note) {
    if (!note) {
        return;
    }

    const newNote = {
        id: 0,
        content: note
    }

    await fetch('http://localhost:7070/notes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(newNote)
     });

    fetchNotes();
  };
  return (
   <div className='App'>
      <div className='notes'>
        <NoteUpdate updateNotes={updateNotes}/>
        <NoteAdd addNote={addNote}/>
        <NoteList notes={notes} removeItem={removeNote}/>      
      </div>
   </div>
  );
}

export default App;
