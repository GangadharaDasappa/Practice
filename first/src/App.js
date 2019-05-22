import React, { Component } from 'react';
import First from './Frist';
import AddEntries from './AddEntries';



class App extends Component {
  state = {
    vogue: [
      {name:"Gnagadhara",age: 30, designation: "Techincal Officer", id : 1},
      {name:"Amarnath",age: 18, designation: "School Teached", id : 2},
      {name:"Ahmed Abubuker",age: 15, designation: "Techincal Officer", id : 3},
      {name:"James",age: 20, designation: "Technical Assistant", id : 4}
    ]
  }
 
  addEntries = (add) => {
    add.id = Math.random();
    let vogue = [...this.state.vogue, add];
    this.setState({
      vogue: vogue
    })
  }

  render(){
    return (
      <div className="App">
        <h4> Welcome to Root Component </h4>
        <First vogue = {this.state.vogue}/>
        <AddEntries addEntries={this.addEntries}/>
        
      </div>
    );
  }
  
}

export default App;
