import './App.css';
import Header from './components/Header';
import CreateArea from "./components/CreateaArea";
import { useState } from 'react';

const App =() => {

  const [notes, setNotes] = useState([]);

  const addNote = (newNote) =>{
    setNotes(prevNotes => {
      return[...prevNotes, newNote];
    });
    console.log(notes);
  }

  return (
    <div className="App">
      <Header />
        <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
