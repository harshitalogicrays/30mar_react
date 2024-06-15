import React from 'react'
import { Button, Card, Col, Image } from 'react-bootstrap'
const ProductItem = ({product}) => {
  return (
    // <div className="col-3 mb-3">
    //   <div className="card">
    //     <img className="card-img-top" src={product.image} height={200} alt={product.name} />
    //     <div className="card-body">
    //         <h4 className="card-title">{product.category} <br/> {product.name}</h4>
    //         <p className="card-text">{product.price}</p>
    //         <p className="card-text">Available : {product.stock}</p>
    //         <button type="button" class="btn btn-primary"> Add to Cart </button>          
    //     </div>
    //   </div>
      
    // </div>

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
