// import { Component } from "react";

// class Firstclasscomp extends Component{
//     render(){
//         return <div>
//             <h1>First class comp</h1>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odit, adipisci placeat rem maiores voluptate ipsa quos incidunt sapiente id vero eius laboriosam harum culpa voluptatem reprehenderit vitae! Rerum, voluptate.</p>
//         </div>
//     }
// }

// export default Firstclasscomp


// rcc
import React, { Component, Fragment } from 'react'

export default class Firstclasscomp extends Component {
  render() {
    return (
      <Fragment>
        <h1>First class comp</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odit, adipisci placeat rem maiores voluptate ipsa quos incidunt sapiente id vero eius laboriosam harum culpa voluptatem reprehenderit vitae! Rerum, voluptate.</p>
      </Fragment>
    )
  }
}
