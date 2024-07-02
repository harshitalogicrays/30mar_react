import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const redirect=useNavigate()
    let categories=['Grocery','Electronics','Jewellary','Sports','Kitchen']
    let initals={name:'',category:'',brand:'',price:'',stock:'',image:'',desc:''}
    let [product,setProduct]=useState({...initals})
    let handleImage=(e)=>{
        // console.log(e.target.files[0])
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload=()=>{
            console.log(reader.result)
            setProduct({...product,image:reader.result})
        }
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        // alert(JSON.stringify(product))
        try{
            await fetch("http://localhost:1000/products",{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify({...product,createdAt:new Date()})
            })
            toast.success("product added")
            redirect('/admin/view')
        }
        catch(err){toast.error(err)}
    }
  return (
    <div className='container mt-5'>
    <div class="card">
        <div class="card-header">
            <h1>Add Product 
                <Link type="button" class="btn btn-primary btn-lg float-end" to='/admin/view'>View Products</Link>
            </h1>
        </div>
        <div class="card-body">
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Category</label>
                    <select class="form-select" name="category" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                        <option value='' selected disabled>Select one</option>
                            {categories.map((c,i)=><option key={i}>{c}</option>)}
                    </select>
                </div>
                <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">Name</label>
                        <input type="text" name="name" class="form-control" value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})}/>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">Brand</label>
                        <input type="text" name="brand" class="form-control" value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})}/>
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3 col">
                        <label for="" class="form-label">Price</label>
                        <input type="number" name="price" class="form-control" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/>
                    </div>
                    <div class="mb-3 col">
                        <label for="" class="form-label">Stock</label>
                        <input type="number" name="stock" class="form-control" value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})}/>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Choose file</label>
                    <input  type="file" class="form-control" name="image" onChange={handleImage}  />
                </div>
               <div class="mb-3">
                <label for="" class="form-label">Description</label>
                <textarea class="form-control" name="desc" rows="3" value={product.desc} onChange={(e)=>setProduct({...product,desc:e.target.value})}></textarea>
               </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                
            </form>
        </div>
    </div>
    
    </div>
  )
}

export default AddProduct
