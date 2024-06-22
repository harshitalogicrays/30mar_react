import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class IncreaseClass extends Component {
  render() {
    return (
      <div>
        <Button 
    onClick={()=>this.props.innerRef.current.value++}>+</Button>
      </div>
    )
  }
}
