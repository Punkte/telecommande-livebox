import React from 'react';
import './assets/App.css'
import { NumberPad } from './components/NumberPad';
import { Controls } from './components/Controls';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <NumberPad />
      <Controls />
    </div>
  );
}

export default App;
