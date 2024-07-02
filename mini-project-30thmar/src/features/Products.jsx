import React, { useEffect, useState } from 'react'
import ProductList from './ProductList.jsx'
import { Container } from 'react-bootstrap'
const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
      getData()
  },[])

  let getData=async()=>{
  try{
  let res =   await fetch("http://localhost:1000/products")
  let result = await res.json()
  setProducts(result)
  }
  catch(err){console.log(err)}
}
  return (
    <Container>
        <h1 className='App'>Products Page</h1><hr/>
        <ProductList products={products}/>
    </Container>
  )
}

export default Products
