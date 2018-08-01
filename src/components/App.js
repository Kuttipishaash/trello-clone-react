import React, { Component } from 'react';
import BoardsPage from './BoardsPage';
import { addUser } from '../firebase/firebase-boards';

// Main application component
class App extends Component {
  render() {
    return (
      <div>
        <BoardsPage/>
      </div>
    );
  }
}

export default App;
