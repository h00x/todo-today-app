import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import './ToDo-List.css';


class ToDoList extends Component {
    render() {
        let list = this.props.listToDo.map((item, index) => <li key={index}><FontAwesomeIcon icon={faCheckCircle} className="CheckIcon" /><p>{item}</p><FontAwesomeIcon icon={faTimes} className="DeleteItem" /></li>);
        return (
            <ul className="ListItems">
                {list}
            </ul>
        );
    }
}

export default ToDoList;
