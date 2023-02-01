import './App.css';
import Header from './components/Header';
import CreateArea from "./components/CreateaArea";
import Note from './components/Notes';
import Footer from './components/footer';
import { Delete } from '@mui/icons-material';

import { useState } from 'react';


const App = () => {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content} 
            onDelete = {deleteNote}
            />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
