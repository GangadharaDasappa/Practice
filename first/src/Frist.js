import React, { Component } from 'react';


class First extends Component{
    render(){
        const vogue = this.props.vogue;
        const vogueList = vogue.map(v => {
            return (
                    <div className="first" key={v.id}>
                        <h2>Am in second component</h2>
                        <div>Name: {v.name} </div>
                        <div>Age: {v.age} </div>
                        <div>Designation: {v.designation} </div>
                    </div>
            );
        })
        return (
                <div className="vogue-List">
                    {vogueList}
                </div>
        )
        
           
        
    }
}

export default First;