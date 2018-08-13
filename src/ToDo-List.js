import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import './ToDo-List.css';


class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.listToDo.map((item, index) => <li key={index}><a className="DoneLink" onClick={() => this.props.handleDoneClick(index)}><FontAwesomeIcon icon={faCheckCircle} className="CheckIcon" /></a><p>{item}</p><a className="DeleteLink" onClick={() => this.props.handleDeleteClick(index)}><FontAwesomeIcon icon={faTimes} className="DeleteItem" /></a></li>);
        return (
            <ul className="ListItems">
                {list}
            </ul>
        );
    }
}

export default ToDoList;
