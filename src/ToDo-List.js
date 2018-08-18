import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import './ToDo-List.css';


class ToDoList extends Component {
    render() {
        let createList = (arr, done) => {
            let createdArr = arr.map((item, index) => {
                if (!done) { 
                    // this creates the todo list
                    return  <li className="ToDoItems" key={index}>
                                <a className="DoneLink" onClick={() => this.props.handleDoneClick(index)}><FontAwesomeIcon icon={faCheckCircle} className="CheckIcon" /></a>
                                <input className="TodoInput" type="text" value={arr[index]} onChange={(e) => this.props.editTodo(e, index)} />
                                <a className="DeleteLink" onClick={() => this.props.handleDeleteClick(index)}><FontAwesomeIcon icon={faTimes} className="DeleteIcon" /></a>
                            </li>
                } else {
                    // This creates the list that is done
                    return  <li className="DoneItems" key={index}>
                                <a className="DoneLink" onClick={() => this.props.handleBackTodo(index)}><FontAwesomeIcon icon={faArrowAltCircleUp} className="BackIcon" /></a>
                                <p className="DoneItem">{item}</p>
                                <a className="DeleteLink" onClick={() => this.props.handleDeleteClickDone(index)}><FontAwesomeIcon icon={faTimes} className="DeleteIcon" /></a>
                            </li>
                }
            });
            return createdArr;
        };
        
        return (
            <div>
                <ul className="ListItems">
                    {createList(this.props.listToDo, false)}
                    {createList(this.props.listDone, true)}
                </ul>
            </div>
        );
    }
}

export default ToDoList;
