import React, { Component } from 'react'

export default class EventdemoinClass extends Component {
    handleClick = ()=>{
        alert("hello handleclick called")
    }
    handleClick1=(a,b)=>{
        alert(a+b)
    }
  render() {
    return (
      <>
         <button type="button" class="btn btn-primary me-2" onClick={()=>alert("button clicked")}>Click Me</button>
      <button type="button" class="btn btn-primary me-2" onClick={this.handleClick}>Click Me</button>
      <button type="button" class="btn btn-primary me-2" onClick={()=>this.handleClick()}>Click Me</button>
      <button type="button" class="btn btn-primary me-2" onClick={()=>this.handleClick1(2,3)}>Click Me</button>       
      </>
    )
  }
}
