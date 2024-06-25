import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowAltCircleLeft, FaLock, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">mini-pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'   
            style={({ isActive}) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "yellow" : "",
              };
            }}>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/products'   
            style={({ isActive}) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "yellow" : "",
              };
            }}>Products</Nav.Link>
          </Nav>
          <Form>
            <InputGroup>
            <Form.Control placeholder="search here" name="search"></Form.Control>
            <Button variant='danger'><FaSearch/></Button>
            </InputGroup>
          </Form>
          <Nav>
          <Nav.Link href="#home"><FaShoppingCart size={30}/>
            <span class="badge rounded-pill text-bg-danger">0</span >           
           </Nav.Link>
            <Nav.Link as={NavLink} to='/login'   
            style={({ isActive}) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "yellow" : "",
              };
            }}><FaLock/> Login</Nav.Link>
            <Nav.Link as={NavLink} to='/register'   
            style={({ isActive}) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "",
                backgroundColor: isActive ? "yellow" : "",
              };
            }}>Register</Nav.Link>
            <Nav.Link href="#home">Welcome Guest</Nav.Link>
            <Nav.Link href="#link"><FaArrowAltCircleLeft/> Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
