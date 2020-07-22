import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllShows from './components/AllShows';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AllShows />
    </div>
  );
}

export default App;
