import React from 'react';
import Home from './component/home';
import Register from './component/regis'
import Login from './component/login'
import User from './component/user'
import Admin from './component/admin'
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/Register'><Register /></Route>
        <Route path='/Login' ><Login /></Route>
        <Route path='/User' ><User /></Route>
        <Route path='/Admin' ><Admin /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
