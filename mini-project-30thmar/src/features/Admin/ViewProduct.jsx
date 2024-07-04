import React, { useEffect, useState } from 'react'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ViewProduct = () => {
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

  let handleDelete=async(id)=>{
    if(window.confirm('are you sure to delete this??')){
        try{
             await fetch(`http://localhost:1000/products/${id}`,{ method:"DELETE"})
            toast.success("product deleted")
            getData()
            }
            catch(err){console.log(err)}
    }
  }
  return (
    <div className='container mt-5'>
    <div class="card">
        <div class="card-header">
            <h1>View Products 
                <Link type="button" class="btn btn-danger btn-lg float-end" to='/admin/add'>Add Product</Link>
            </h1>
        </div>
        <div class="card-body">
            <div class="table-responsive"  >
                <table class="table table-brodered table-striped table-hover"   >
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th>Category</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th>Brand</th>
                            <th>price</th>
                            <th>stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length==0 && <tr><td colspan={8}>No product Found</td></tr>}
                        {products.map((product,i)=>
                            <tr key={product.id}>
                                <td scope="row">{i+1}</td>
                                <td>{product.category}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} height={50} width={50}/></td>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link type="button" class="btn btn-success me-2" 
                                    to={`/admin/edit/${product.id}`} > <FaPenAlt/> </Link>
                                    
                                    <button type="button" class="btn btn-danger" onClick={()=>handleDelete(product.id)} > <FaTrashAlt/> </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
    
    </div>
  )
}

export default ViewProduct
