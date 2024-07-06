import React, { useContext } from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap'
import { myContext } from './ContextData'
const ProductItem = ({product}) => {
  const data = useContext(myContext)
  let handleClick=()=>{
  data.addtocart(product)
  }
  return (
    <Col xs={3} className='mb-3'>
      <Card>
        <Card.Img variant="top" src={product.image} height={200} alt={product.name}/>
        <Card.Body>
          <Card.Title>{product.category} <br/> {product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.stock}</Card.Text>
          <Button variant='info' onClick={handleClick}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductItem
