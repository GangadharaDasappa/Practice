import React, { Component } from 'react';
import First from './Frist';



class App extends Component {
  state = {
    vogue: [
      {name:"Gnagadhara",age: 30, designation: "Techincal Officer", id : 1},
      {name:"Amarnath",age: 65, designation: "School Teached", id : 2},
      {name:"Ahmed Abubuker",age: 30, designation: "Techincal Officer", id : 3},
      {name:"James",age: 20, designation: "Technical Assistant", id : 4}
    ]
  }
  render(){
    return (
      <div className="App">
        <h4> Welcome to Root Component </h4>
        <First vogue = {this.state.vogue}/>
        
      </div>
    );
  }
  
}

export default App;
