import React from 'react';
import{ BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import AllShows from './components/AllShows';
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
      </Switch>
    </Router>
  );
}

export default App;
