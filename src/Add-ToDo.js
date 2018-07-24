import React, { Component } from 'react';
import TodoList from './ToDo-List';
import './Add-ToDo.css';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholderText: "Add thing to do…",
            value: "",
            listToDo: ["Eat", "Sleep", "Code", "Repeat"]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({listToDo: [this.state.value, ...this.state.listToDo]});
    }

    render() {
        
        return (
            <div>
                <form className="AddToDoForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.state.placeholderText} value={this.state.value} onChange={this.handleChange} />
                    <button type="submit" value="Add">+</button>
                </form>
                <TodoList listToDo={this.state.listToDo} />
            </div>
        );
    }
  }
  
  export default AddToDo;
  