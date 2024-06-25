import React from 'react'
import List from '/src/assets/list.js'
import ProductList from './ProductList.jsx'
import { Container } from 'react-bootstrap'
const Products = () => {
  return (
    <Container>
        <h1 className='App'>Products Page</h1><hr/>
        <ProductList products={List}/>
    </Container>
  )
}

export default Products
