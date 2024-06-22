import React, { Component } from 'react'
import Image1 from '../../assets/register.png'

export default class ForminClass extends Component {
    constructor(props) { super(props)   
      this.state = { user: {username:'',email:'',password:'',cpassword:''} }
    }
    handleChange = (e)=>{
        this.setState({
            user :{...this.state.user , [e.target.name]:e.target.value}  })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(this.state.user))
    }
  render() {
    return (
        <div className='container mt-5 shadow p-2'>
        <div className="row">
            <div className="col">
                <img src={Image1} className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                        <label for="" class="form-label">Username</label>
                        <input type="text" name="username" class="form-control" value={this.state.user.username} onChange={this.handleChange}/>  
                      
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Email</label>
                        <input type="text" name="email" class="form-control" value={this.state.user.email} onChange={this.handleChange}
                       />   
                                  
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" value={this.state.user.password} onChange={this.handleChange}
                         />  
                                         
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input type="password" name="cpassword" class="form-control" value={this.state.user.cpassword} onChange={this.handleChange}
                        />    
                                         
                    </div>
                    <div class="d-grid gap-2">
                        <button  type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    )
  }
}
