import React from 'react'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import  Container  from 'react-bootstrap/Container'
import Image1 from '../../assets/images/d.jpg'
import { MyButton, TextBox } from './styledcomp'
const ReactBootstrap = () => {
  return (
    <Container className='mt-5 shadow p-2'>
        <Row>
            <Col>
                <Image src={Image1} fluid/>
            </Col>
            <Col>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username"></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email"></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password"></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword"></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant='danger'>Submit</Button>
                </Form>
            </Col>
        </Row>

        <MyButton>Button</MyButton>
        <TextBox type="password" placeholder="enter name"></TextBox>
    </Container>
  )
}

export default ReactBootstrap
