import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Chat from './components/Chat';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/chat' component={Chat} />
      </Router>
    </div>
  );
}

export default App;
