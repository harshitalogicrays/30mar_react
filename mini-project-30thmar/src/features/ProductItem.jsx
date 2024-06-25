import React from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap'
const ProductItem = ({product}) => {
  return (
    <Col xs={3} className='mb-3'>
      <Card>
        <Card.Img variant="top" src={product.image} height={200} alt={product.name}/>
        <Card.Body>
          <Card.Title>{product.category} <br/> {product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.stock}</Card.Text>
          <Button variant='info'>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductItem
