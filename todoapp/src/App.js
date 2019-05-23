import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';



class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Plat football"}
    ]
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(t => {
      return t.id !== id
    }) ;
    this.setState({
      todos: todos 
    })
  }

  addTodo = (todo) =>{
todo.id = Math.random()*10;
let todos = [...this.state.todos,todo];
this.setState({
  todos: todos
})
  }

  render(){
  return (
    <div className="todo-app container">
     <h1 className="center blue-text"> Todo's </h1>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App;
