import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import  Container  from 'react-bootstrap/Container'
import Image1 from '../../assets/register.png'
import { useForm } from 'react-hook-form'
const Reacthookform = () => {
    const {register,handleSubmit,formState: { errors },trigger}=useForm()
       {/* register your input into the hook by invoking the "register" function */}
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

    let handleData=(user)=>{
        alert(JSON.stringify(user))
    }
  return (
    <Container className='mt-5 shadow p-2'>
        <h1>React Hook Form Demo</h1><hr/>
    <Row>
        <Col>
            <Image src={Image1} fluid/>
        </Col>
        <Col>
            <Form onSubmit={handleSubmit(handleData)}>
                <Form.Group className='mb-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" {...register('username',{required:"Username is required"})}  onBlur={()=>trigger('username')}></Form.Control>
                    {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" {...register('email',{required:"email is required"})} onBlur={()=>trigger('email')}></Form.Control>
                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" {...register('password',{required:"password is required"})} onBlur={()=>trigger('password')}></Form.Control>
                    {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="cpassword" {...register('cpassword',{required:"cpassword is required"})} onBlur={()=>trigger('cpassword')} ></Form.Control>
                    {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
                </Form.Group>
                <Button type="submit" variant='danger'>Submit</Button>
            </Form>
        </Col>
    </Row>
</Container>
  )
}

export default Reacthookform
