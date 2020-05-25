import React from 'react';
import Home from './component/home';
import Register from './component/regis'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/Register' component={Register} />
  </Router>
  );
}

export default App;