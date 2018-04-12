import React from 'react'
import './todo_item.css'

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={props.onChange}
      />

      &nbsp;

      <span className={props.todo.done ? 'todo-item-done' : ''}>
        {props.todo.title}
      </span>
    </li>
  )
}

export default TodoItem
