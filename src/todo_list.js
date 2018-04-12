import React, { Component } from 'react'
import TodoItem from './todo_item'
import './todo_list.css'

const TODOS = [
  { title: 'Learn React',         done: true },
  { title: 'Deploy with Rails 5', done: false },
  { title: 'Enjoy life',          done: false },
]

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: TODOS,
      newTodoTitle: ''
    }
  }

  toggle(todoIndex) {
    const todos           = this.state.todos.slice()
    todos[todoIndex].done = !todos[todoIndex].done
    this.setState({ todos })
  }

  update(todoIndex, newTitle) {
    const todos            = this.state.todos.slice()
    todos[todoIndex].title = newTitle
    this.setState({ todos })
  }

  clearDoneTodos() {
    const keepTodos = this.state.todos.filter(todo => !todo.done)
    this.setState({ todos: keepTodos })
  }

  addTodo(event) {
    if (event.key !== 'Enter') return

    const newTodoTitle = this.state.newTodoTitle;
    const todos        = this.state.todos.slice()

    todos.push({ title: newTodoTitle, done: false })

    this.setState({
      todos: todos,
      newTodoTitle: ''
    })
  }

  renderTodoItem(todo, index) {
    return (
      <TodoItem
        key={index}
        todo={todo}
        onChange={() => this.toggle(index)}
        onUpdate={title => this.update(index, title)}
      />
    )
  }

  render() {
    return (
      <div>
        <ul className="todo-list">
          {this.state.todos.map(this.renderTodoItem)}
        </ul>

        <div>
          Add a todo:&nbsp;
          <input
            type="text"
            value={this.state.newTodoTitle}
            onKeyPress={e => this.addTodo(e)}
            onChange={e => this.setState({ newTodoTitle: e.target.value})}
          />
        </div>

        <p>
          <button onClick={() => this.clearDoneTodos()}>
            Clear done todos
          </button>
        </p>
      </div>
    )
  }
}

export default TodoList
