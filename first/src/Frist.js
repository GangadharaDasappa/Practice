import React from 'react'; // For UI component
// import React, { Component } from 'react'; // For Container Component 

// // Container Component
// class First extends Component{
//     render(){
//         const vogue = this.props.vogue;
//         const vogueList = vogue.map(v => {
//             return (
//                     <div className="first" key={v.id}>
//                         <h2>Am in second component</h2>
//                         <div>Name: {v.name} </div>
//                         <div>Age: {v.age} </div>
//                         <div>Designation: {v.designation} </div>
//                     </div>
//             );
//         })
//         return (
//                 <div className="vogue-List">
//                     {vogueList}
//                 </div>
//         )
        
           
        
//     }
// }


// Ui/Stateless/Functional Component
 const First = ({vogue, delEntries}) => { 
        // const {vogue} = props; destruction by passing the props directly in to the fuction in the above line
        const vogueList = vogue.map(v => {
            if(v.age > 0) {
            return (
                    <div className="first" key={v.id}>
                        <h2>Am in second component</h2>
                        <div>Name: {v.name} </div>
                        <div>Age: {v.age} </div>
                        <div>Designation: {v.designation} </div>
                        <button onClick ={ () =>{delEntries(v.id)} }>Delete</button>
                    </div>
            );
            } else {
                return null;
            }
        })
        return (
                            <div className="vogue-List">
                                {vogueList}
                            </div>
                    )

        // Conditional Operator
        // const vogueList = vogue.map(c => {
        //     return c.age > 20?(
        //         <div className="first" key={c.id}>
        //                  <h2>Am in second component</h2>
        //                 <div>Name: {c.name} </div>
        //                  <div>Age: {c.age} </div>
        //                  <div>Designation: {c.designation} </div>
        //              </div>
        //     ):null;
        // })
        // return (
        //         <div className="vogue-List">
        //             {
        //             vogue.map(c => {
        //             return c.age > 20?(
        //                     <div className="first" key={c.id}>
        //                         <h2>Am in second component</h2>
        //                         <div>Name: {c.name} </div>
        //                         <div>Age: {c.age} </div>
        //                         <div>Designation: {c.designation} </div>
        //                     </div>
        //                 ):null;
        //             })}
        //         </div>
        // )                        
    }


export default First;