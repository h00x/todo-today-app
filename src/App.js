import React, { Component } from 'react';
import './App.css';
import AddToDo from './Add-ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDo />
      </div>
    );
  }
}

export default App;
