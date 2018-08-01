import React, { Component } from 'react';
import BoardsPage from './BoardsPage';
import { addUser } from '../firebase/firebase-boards';
import UserRegistration from './UserRegistration';
import Login from './Login';

// Main application component
class App extends Component {
  render() {
    return (
      <div>
        <UserRegistration/>
        <Login/>
      </div>
    );
  }
}

export default App;
