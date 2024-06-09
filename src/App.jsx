import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage';
import Section from './components/Section';
import sectionsJSON from './data/NYT-sections.json'

function App() {
  const sections = Array.from(sectionsJSON);

  return (
    <Routes>
      <Route path='/' element={<Homepage sections={sections}/>} />
      <Route path='/sections/:id' element={<Section sections={sections}/>} />
    </Routes>
  );
}

export default App;
