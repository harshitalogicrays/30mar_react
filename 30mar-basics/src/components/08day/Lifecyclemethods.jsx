import React, { Component } from 'react'

export default class Lifecyclemethods extends Component {
    constructor(props) {
      super(props)
      console.log("constructor called")
      this.state = {username:'ram'}
    }
    static getDerivedStateFromProps(state,props){
        console.log("getDerivedStateFromProps called")
        return {state}
    }
    componentDidMount(){
        console.log("componentDidMount called")
    }
    handleChange=(e)=>{
        console.log("handleChange called")
        this.setState({username:"Meera"})
    }
    shouldComponentUpdate(nextState,nextProps){
        console.log("shouldComponentUpdate called")
        return true
    }
    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log("getSnapshotBeforeUpdate called")
        console.log(prevState)
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate  called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount  called")
    }
  render() {
    console.log("render called")
    return (
      <>
        <h1>{this.state.username}</h1>
        <button type="button" onClick={this.handleChange}>Change Name</button>
      </>
    )
  }
}
