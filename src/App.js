import React, { Component } from 'react';
import './App.css';
import AddToDo from './Add-ToDo';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <img src="images/todo-today-logo.png" className="Logo" width="145" height="95" alt="Logo ToDo Today" />
        <div className="App">
          <AddToDo />
        </div>
      </div>
    );
  }
}

export default App;
