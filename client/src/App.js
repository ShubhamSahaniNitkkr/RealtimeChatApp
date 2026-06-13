import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Chat from './components/Chat';
import getBasename from './getBasename';

function App() {
  return (
    <div className='App'>
      <Router basename={getBasename()}>
        <Route exact path='/' component={Login} />
        <Route exact path='/chat' component={Chat} />
      </Router>
    </div>
  );
}

export default App;
