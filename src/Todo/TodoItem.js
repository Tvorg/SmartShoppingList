import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";
import "./Todo.css"


function TodoItem({ todo, index, onChange}) {
    const { removeTodo } = useContext(Context)
    const classes =[]
    if(todo.completed){
        classes.push('done')
    }
    return(
        <li className="liTodoItemStyle">
            <span className={classes.join('')}>
                <input
                className="inputTodoItemStyle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onChange(todo.id)}
                />
                <strong>{index +1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="buttonTodoItemStyle" onClick={removeTodo.bind(null, todo.id)}>
                &times;</button>

        </li>
        )
}


TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
 }


export default TodoItem