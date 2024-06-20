import React, { Component } from 'react'

export default class StateDemoinClass extends Component {
    constructor(props) {
      super(props)    
      this.state = {count:1, isLoggedIn:false , users:[] ,  product:{}}
    }
    handleCount=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button  type="button" class="btn btn-primary me-2" onClick={this.handleCount}  >
            Counter
        </button>
        
        <button
            type="button"
            class="btn btn-primary" 
            onClick={()=>this.setState({isLoggedIn : !this.state.isLoggedIn})}>
            {this.state.isLoggedIn ? "True" :"False"}
        </button>
        
      </>
    )
  }
}
