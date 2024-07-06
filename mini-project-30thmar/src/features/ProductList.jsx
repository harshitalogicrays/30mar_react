import React from 'react'
import ProductItem from './ProductItem'
import Loader from './Loader'

const ProductList = ({products}) => {
  return (
   <>
    {products.length==0 && <Loader/>}
    
    <div className="row">
     {products.map((product,index)=><ProductItem key={product.id} product={product} />)}
    </div>
   </>
  )
}

export default ProductList
