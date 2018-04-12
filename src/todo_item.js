import React from 'react'
import './todo_item.css'

const TodoItem = (props) => {
  const classNames = ['todo-item']

  if (props.todo.done) {
    classNames.push('todo-item-done')
  }

  return (
    <li
      onClick={props.onClick}
      className={classNames.join(' ')}
    >
      {props.todo.title}
    </li>
  )
}

export default TodoItem
