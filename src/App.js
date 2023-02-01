import './App.css';
import Header from './components/Header';
import CreateArea from "./components/CreateaArea";
import Note from './components/Notes';
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
            content={noteItem.content} />
        );
      })}

    </div>
  );
}

export default App;
