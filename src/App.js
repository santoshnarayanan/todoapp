import './App.css';
import Header from './components/Header';
import CreateArea from "./components/CreateaArea";
import { useState } from 'react';

const App =() => {

  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Header />
        <CreateArea onAdd={addnote} />
    </div>
  );
}

export default App;
