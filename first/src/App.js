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
    add.id = Math.floor((Math.random()*10));
    let vogue = [...this.state.vogue, add];
    this.setState({
      vogue: vogue
    })
  }

  delEntries = (id) => {
    console.log(id);
    let vogue = this.state.vogue.filter(v => {
    return v.id !== id;
    }) ;
  this.setState({
    vogue: vogue})
  }
componentDidMount() {
  console.log("Component Mounted");
}

componentDidUpdate(prevProps, prevState) {
  console.log("component Updated");
  console.log(prevProps, prevState);
}


  render(){
    return (
      <div className="App">
        <h4> Welcome to Root Component </h4>
        <First vogue = {this.state.vogue} delEntries={this.delEntries}/>
        <AddEntries addEntries={this.addEntries}/>
        
        
      </div>
    );
  }
  
}

export default App;
