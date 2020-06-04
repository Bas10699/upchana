import React from 'react';
import Home from './component/home';
import Register from './component/regis'
import Login from './component/login'
import User from './component/user'
import HomeAdmin from './component/admin/home'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/User' component={User} />
      <Route exact path='/HomeAdmin' component={HomeAdmin} />
    </Router>
  );
}

export default App;
