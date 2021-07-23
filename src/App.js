
import React, {Component} from 'react';
import Todos from "./Todos"
import AddToDo from './AddToDo';
import "./App.css"

class App extends Component {
  state = {
    todos: [
    ]
  }
  deleteToDo = (id) => {
    const new_todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: new_todos
    })
  }
  addToDo = (todo) => {
    todo.id = Math.random();
    let new_todos = [...this.state.todos, todo]
    this.setState({
      todos: new_todos
    })
  }
  render() {
  return (
    <div className="todo-app container">
    <h1 className="center cyan-text">Todo App</h1>
    <Todos todos={this.state.todos} deleteToDo = {this.deleteToDo}/>
    <AddToDo addToDo={this.addToDo}/>
    </div>
  );
}
}

export default App;
