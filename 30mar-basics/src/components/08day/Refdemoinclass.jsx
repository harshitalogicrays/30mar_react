import React, { Component, createRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import IncreaseClass from './IncreaseClass'

export default class Refdemoinclass extends Component {
    constructor(props) { // when component is created and entered into the DOM
        console.log("constructor called")
      super(props)  
      this.state = {username:''}
      this.myRef = createRef()
      this.countRef=createRef()  }
    fetchData=(e)=>{
        alert(this.myRef.current.value)
        this.myRef.current.className = 'form-control is-invalid' }

    componentDidMount(){ // once comoponent is laoded completely in the DOM
        console.log("componentDidMount called")
        this.myRef.current.focus() }

  render() { // when any state or prop change
    console.log("render called")
    return ( <>
        <Form.Control value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}></Form.Control>
        <Form.Control ref={this.myRef}></Form.Control>
        <Button onClick={this.fetchData}>Fetch Data</Button><hr/>

        <input defaultValue={1} ref={this.countRef}/>
        <IncreaseClass innerRef={this.countRef}/><hr/>
    </>
    )
  }
}
