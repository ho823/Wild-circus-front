import React from 'react';
import{ BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import AllShows from './components/AllShows';
import About from './components/About';
import Maps from './components/Maps';
import Contact from './components/Contact';
import Backoffice from './components/Backoffice';





import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Link to="/" />
        </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/spectacle" element={<AllShows />} />
        <Route path="/aproximite" element={<Maps />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bdd" element={<Backoffice />} />
      </Routes>
    </Router>
  );
}

export default App;
