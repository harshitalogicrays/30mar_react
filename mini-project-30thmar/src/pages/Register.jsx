import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Image1 from '/src/assets/register.png'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {
  let obj={username:'',email:'',password:'',cpassword:'',role:'1'}
    const redirect  = useNavigate()
    let [user,setUser]=useState({...obj})
    let [errors,setErrors]=useState({})
    let handleSubmit=async(e)=>{
        e.preventDefault();  
        let myErrors = validations()
       if(Object.keys(myErrors).length==0){
            setErrors({})
          // post data 
          try{
            // await fetch("http://localhost:1000/users",{
            //     method:"POST",
            //     headers:{'content-type':'application/json'},
            //     body:JSON.stringify({...user,id:Date.now(),createdAt:new Date()})
            // })
            await axios.post("http://localhost:1000/users",{...user,createdAt:new Date()})
            toast.success("Registered successfully")
            redirect('/login')
          }
          catch(err){
            toast.error(err)
          }
       }
       else { e.preventDefault()
        setErrors(myErrors)} 
    }

    let validations=()=>{
        let formerrors={}
        let pattern=/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if(user.username==''){
            formerrors.unameerr = "Username is required";// formerrors = {unameerr:"Username is required"} 
        }
        if(user.email==''){formerrors.emailerr="email is required"}
        else if(!pattern.test(user.email)){formerrors.emailerr="Invalid Email"}
        if(user.password==''){formerrors.pwderr="password is required"}
        if(user.cpassword=='' || user.cpassword != user.password){formerrors.cpwderr="password not match"}
        return formerrors}
  return (
    <div className='container col-9 mt-5 shadow p-2'>
        <h1>Register Page</h1><hr/>
        <div className="row">
            <div className="col">
                <img src={Image1} className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="" class="form-label">Username</label>
                        <input type="text" name="username" class={`form-control ${errors.unameerr && 'is-invalid'}`}
                        value={user.username} 
                        onChange={(e)=>setUser({...user,username:e.target.value})}/>  
                        {errors.unameerr && <span className='text-danger'>{errors.unameerr}</span>}                     
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Email</label>
                        <input type="text" name="email" class="form-control" 
                        value={user.email}  onChange={(e)=>setUser({...user,email:e.target.value})}/>   
                         {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}                     
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" 
                        value={user.password}  onChange={(e)=>setUser({...user,password:e.target.value})} />  
                         {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}                      
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input type="password" name="cpassword" class="form-control"
                        value={user.cpassword}  onChange={(e)=>setUser({...user,cpassword:e.target.value})}  />    
                         {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span>}                    
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

export default Register
