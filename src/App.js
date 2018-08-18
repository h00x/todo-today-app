import React, { Component } from 'react';
import './App.css';
import AddToDo from './Add-ToDo';

/*
* TODO:
* - Add Animations when checking things as done
* - Add responsive CSS for mobile
* - Cross check on OS's
* - Drag & Drop
*
* NICE TO HAVES
* - Add sounds
*/

class App extends Component {
  render() {
    return (
      <div className="Container">
        <img src="images/todo-today-logo.png" className="Logo" width="145" height="95" alt="Logo ToDo Today" />
        <div className="App">
          <AddToDo />
          <p className="QuoteText">Do more things with your life</p>
        </div>
      </div>
    );
  }
}

export default App;
