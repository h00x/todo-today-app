import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import './ToDo-List.css';


class ToDoList extends Component {
    render() {
        let todoItems = this.props.listToDo.map((item, index) => {
            // This creates the todo list
            return <ToDoItem 
                        key={index} 
                        done={false}
                        TodoItem={item} 
                        DoneClick={() => this.props.handleDoneClick(index)} 
                        DeleteClick={() => this.props.handleDeleteClick(index)} 
                        EditTodo={(e) => this.props.editTodo(e, index)} />
        });

        let doneList = this.props.listDone.map((item, index) => {
            // This creates the list that is done
            return <ToDoItem 
                        key={index} 
                        done={true}
                        DoneItem={item} 
                        DoneClick={() => this.props.handleBackTodo(index)} 
                        DeleteClick={() => this.props.handleDeleteClickDone(index)} />
        });
        
        return (
            <div>
                <ul className="ListItems">
                        {todoItems}
                        {doneList}
                </ul>
            </div>
        );
    }
}

class ToDoItem extends Component {
    render() {
        return (
            <li className={!this.props.done ? "ToDoItems" : "DoneItems"}>
                <a className="DoneLink" onClick={this.props.DoneClick}><FontAwesomeIcon icon={!this.props.done ? faCheckCircle : faArrowAltCircleUp} className={!this.props.done ? "CheckIcon" : "BackIcon"} /></a>
                {!this.props.done ? <input className="TodoInput" type="text" value={this.props.TodoItem} onChange={this.props.EditTodo} /> : <p className="DoneItem">{this.props.DoneItem}</p>}
                <a className="DeleteLink" onClick={this.props.DeleteClick}><FontAwesomeIcon icon={faTimes} className="DeleteIcon" /></a>
            </li>
        );
    }
}

export default ToDoList;
