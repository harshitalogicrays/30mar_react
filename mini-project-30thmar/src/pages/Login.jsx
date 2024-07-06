import React, { useState } from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import  Container  from 'react-bootstrap/Container'
import Image1 from '/src/assets/register.png'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loader from '../features/Loader'

const Login = () => {
  const {register,handleSubmit,formState: { errors },trigger}=useForm()
  let [isLoading,setIsLoading]=useState(false)
  let redirect =useNavigate()
    let handleData=async(user)=>{ 
      setIsLoading(true)
        try{
          let res = await fetch(`http://localhost:1000/users?email=${user.email}`)
          let result = await res.json()
          console.log(result)
          if(result.length==0)toast.error("Invalid credentials")
          else{
            if(result[0].password==user.password){
              if(result[0].role=='0'){
                toast.success("loggedIn Successfully")
                redirect('/admin')
              }
              else if(result[0].role=='1'){
                toast.success("loggedIn Successfully")
                redirect('/')
              }  
              
              let obj={isLoggedIn:true,email:result[0].email,name:result[0].username,role:result[0].role}
              sessionStorage.setItem("30marmini",JSON.stringify(obj))
              setIsLoading(false)
            }
            else {toast.error("Invalid credentials");  setIsLoading(false)}
        } 
        }
        catch(err){
          setIsLoading(false)
          toast.error("Invalid credentials")
        }
      
    }
  return (
    <>
    {isLoading && <Loader/>}
    <Container className='mt-5 shadow p-2'> <h1>Login Page</h1><hr/>   <Row>
        <Col>  <Image src={Image1} fluid/>  </Col>
        <Col><Form onSubmit={handleSubmit(handleData)}>
                   <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" {...register('email',{required:"email is required",
                    pattern:{value:/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/,
                        message:'Invalid Email'  }    
                    })} onBlur={()=>trigger('email')}></Form.Control>
                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" {...register('password',{required:"password is required",
                    })} onBlur={()=>trigger('password')}></Form.Control>
                    {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                </Form.Group>
                <Button type="submit" variant='danger'>Submit</Button>
            </Form>
        </Col>
    </Row>
</Container>
</>
  )
}

export default Login
