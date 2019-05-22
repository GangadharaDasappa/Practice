import React, { Component } from 'react';


class AddEntries extends Component{
    state = {
        name: null,
        age: null,
        designation: null
    }

    handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value,

         })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);   
        this.props.addEntries(this.state); 
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name" >Name:</label>
                <input type="text" id="name" onChange={this.handleChange}></input>
                <label htmlFor="age" >Age:</label>
                <input type="text" id="age" onChange={this.handleChange}></input>
                <label htmlFor="designation" >Designation:</label>
                <input type="text" id="designation" onChange={this.handleChange}></input>
                <button>Submit</button>

                    
                </form>

            </div>
        )
    }
}

export default AddEntries;