import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const ASidebar = () => {
  return (
    <>
      <Nav defaultActiveKey="/admin" className="flex-column">
        <Nav.Link as={Link} to="/admin">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/admin/view">View Products</Nav.Link>
        <Nav.Link as={Link} to="/admin/add">Add Products</Nav.Link>
    </Nav>
    </>
  )
}

export default ASidebar
