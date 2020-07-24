import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/spectacle" component={AllShows} />
        <Route path="/aproximite" component={Maps} />
        <Route path="/apropos" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/bdd" component={Backoffice} />
      </Switch>
    </Router>
  );
}

export default App;
