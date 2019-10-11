import React from 'react';
import axios from 'axios';
import Image from './components/Image';

import './App.css';

const onSubmit = async (e) => {
  e.preventDefault();
  const file = e.target.files[0];
  await axios.post('/upload', file);
}

function App() {
  return (
    <div className="App">
        <input type="file" name="image" onChange={onSubmit} />
        <Image />
    </div>
  );
}

export default App;
