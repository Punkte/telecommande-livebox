import React from 'react';
import './assets/App.css'
import { NumberPad } from './components/NumberPad';
import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Vod } from './components/Vod';

function App() {
  return (
    <div className="App">
      <Header />
      <NumberPad />
      <Controls />
      <Vod />
    </div>
  );
}

export default App;
