import React from 'react'
import List from '../03day/list.js'
import ProductList from './ProductList.jsx'
const Products = () => {
  return (
    <>
        <h1 className='App'>Products Page</h1><hr/>
        <ProductList products={List}/>
    </>
  )
}

export default Products
