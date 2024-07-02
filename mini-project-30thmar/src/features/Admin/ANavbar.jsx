import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaArrowAltCircleLeft} from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ANavbar = () => {
    const redirect=useNavigate()
    let handleLogout=()=>{
        sessionStorage.removeItem("30marmini")
        toast.success("LoggedOut Successfully")
        redirect('/')
    }
    const [username,setUsername]=useState('Guest')
    useEffect(()=>{
        if(sessionStorage.getItem("30marmini") != null){
        let obj=JSON.parse(sessionStorage.getItem("30marmini"))
        setUsername(obj.name)
        }
    },[sessionStorage.getItem("30marmini")])
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/admin'>Home</Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link href="#home">Welcome {username}</Nav.Link>
          <Nav.Link onClick={handleLogout}><FaArrowAltCircleLeft/> Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default ANavbar
