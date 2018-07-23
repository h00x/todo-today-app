import React, { Component } from 'react';
import './Add-ToDo.css';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholderText: "Add thing to do…"
        };
    }

    render() {
      return (
        <form className="AddToDoForm">
            <input type="text" placeholder={this.state.placeholderText}/>
            <button type="button" value="Add">+</button>
        </form>
      );
    }
  }
  
  export default AddToDo;
  