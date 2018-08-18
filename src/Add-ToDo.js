import React, { Component } from 'react';
import TodoList from './ToDo-List';
import './Add-ToDo.css';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholderText: "Add thing to do…",
            value: "",
            listToDo: [],
            listDone: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.doneTodoList = this.doneTodoList.bind(this);
        this.deleteListItemDone = this.deleteListItemDone.bind(this);
        this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this);
        this.backTodo = this.backTodo.bind(this);
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage(); // when components mounted calls this function to update the state with locally stores values
    }

    // Updates state with localy stored values
    hydrateStateWithLocalStorage() {
        let toDoValue = JSON.parse(localStorage.getItem("storedTodo"));
        let doneValue = JSON.parse(localStorage.getItem("storedDone"));
        this.setState({listToDo: toDoValue});
        this.setState({listDone: doneValue});
    }

    // Handles the changing of the input field so we keep the value updated in state
    handleChange(event) {
        if (this.state.value.length < 30) {
            this.setState({value: event.target.value});
        }
    }

    // Handles submiting to the to do list and is only fired when there is a value 
    // in the innput field
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value) {
            this.setState({listToDo: [this.state.value, ...this.state.listToDo]});
            localStorage.setItem("storedTodo", JSON.stringify([this.state.value, ...this.state.listToDo])); //updates whats is stored locally 
            this.setState({value: ""});
        }
    }

    // Handles the deletion of a item that is in the toDoList
    deleteListItem(index) {
        let changeArr = this.state.listToDo;
        changeArr.splice(index, 1)
        this.setState({listToDo: changeArr});
        localStorage.setItem("storedTodo", JSON.stringify(changeArr));
    }

    // Handles the deletion of a item that is marked as done
    deleteListItemDone(index) {
        let changeArr = this.state.listDone;
        changeArr.splice(index, 1)
        this.setState({listDone: changeArr});
        localStorage.setItem("storedDone", JSON.stringify(changeArr));
    }

    // Handles the click on done. When done is clicked it is removed from listToDo 
    // and it then is added to listDone
    doneTodoList(index) {
        let changeArr = this.state.listToDo;
        let doneItem = this.state.listToDo[index];
        changeArr.splice(index, 1);
        this.setState({listToDo: changeArr});
        localStorage.setItem("storedTodo", JSON.stringify(changeArr));
        this.setState({listDone: [doneItem, ...this.state.listDone]});
        localStorage.setItem("storedDone", JSON.stringify([doneItem, ...this.state.listDone]));
    }

    // Handles items that were marked as done and are send back to todo. When you 
    // click the up icon this moves the item back to the todo list 
    backTodo(index) {
        let doneList = this.state.listDone;
        let backItem = this.state.listDone[index];

        doneList.splice(index, 1);
        this.setState({listDone: doneList});
        localStorage.setItem("storedDone", JSON.stringify(doneList));
        this.setState({listToDo: [...this.state.listToDo, backItem]});
        localStorage.setItem("storedTodo", JSON.stringify([...this.state.listToDo, backItem]));
    }

    render() {
        return (
            <div>
                <form className="AddToDoForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.state.placeholderText} value={this.state.value} onChange={this.handleChange} />
                    <button type="submit" value="Add" className={this.state.value ? "" : "InactiveButton"}>+</button>
                    <p className="LimitCount">{this.state.value.length}/30</p>
                </form>
                <TodoList listToDo={this.state.listToDo} 
                          listDone={this.state.listDone} 
                          handleDeleteClick={this.deleteListItem} 
                          handleDeleteClickDone={this.deleteListItemDone} 
                          handleDoneClick={this.doneTodoList}
                          handleBackTodo={this.backTodo}
                />
            </div>
        );
    }
  }
  
  export default AddToDo;
  