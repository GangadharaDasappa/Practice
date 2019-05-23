import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from './components/Navbar';
import { BrowserRouter , Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import {Route} from 'react-route';





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
    <BrowserRouter >
    <div className="todo-app container center">
    <Navbar />
    <h1 className="center blue-text"> Todo's </h1>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     <AddTodo addTodo={this.addTodo}/>
    <Link to ='/' Component={Home} />
    <Link to='/About' Component={About} />
    <Link to='/Contact' Component={Contact} />
     
    </div>
    </BrowserRouter> 
  );
  }
}

export default App;
