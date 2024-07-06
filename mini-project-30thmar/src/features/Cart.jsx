import React, { useContext, useEffect } from 'react'
import { FaArrowCircleLeft, FaTrashAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { myContext } from './ContextData'
import { toast } from 'react-toastify'

const Cart = () => {
    const navigate=useNavigate()
    const data=useContext(myContext)
    let {cartItems,total,increase,decrease,removefromcart,emptycart,calculate_total,setCartItems}=data
    useEffect(()=>{
        calculate_total()
    },[cartItems])
    
    let handleCheckout=async()=>{
        if(cartItems.length !=0){
            let obj=JSON.parse(sessionStorage.getItem("30marmini"))
            let t =new Date()
            let orderDate=t.toLocaleDateString()
            let orderTime = t.toLocaleTimeString()
            try{
                await fetch("http://localhost:1000/orders",{
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify({cartItems,total,orderDate,orderTime,orderStatus:'Placed',
                        userEmail: obj.email,createdAt:new Date()})
                })
                toast.success("order placed")
                navigate('/')
                setCartItems([])
            }
            catch(err){toast.error(err)}
        }           
    }
  return (
    <div className='container mt-5 shadow p-2'>
        <h1>Cart Page</h1>
        <div class="table-responsive"  >
            <table class="table table-bordered table-striped table-hover"  >
                <thead>
                    <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length==0 &&
                    <tr><td colSpan={7}>No item in cart</td></tr>}
                    {cartItems.map((c,i)=>
                    <tr key={c.id}>
                        <td scope="row">{i+1}</td>
                        <td>{c.name}</td>
                        <td><img src={c.image} height={50} width={50}/></td>
                        <td>{c.price}</td>
                        <td>
                            <button onClick={()=>decrease(c)}>-</button>
                            <input type="text" value={c.qty} readonly style={{width:'40px',textAlign:'center'}} />
                            <button onClick={()=>increase(c)}>+</button>
                        </td>
                        <td>{c.qty * c.price}</td>
                        <td>
                            <button type="button" class="btn btn-danger" onClick={()=>removefromcart(c.id)} >
                                <FaTrashAlt/>
                            </button>
                            
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
       <div className="row">
        <div className="col-9">
            <button type="button" class="btn btn-danger btn-lg" onClick={()=>emptycart()}>Empty cart</button> <br/>
            <Link to='/products'><FaArrowCircleLeft/> Continue Shopping</Link>        
        </div>
        <div className="col">
            <h1>Total: <span className='float-end'>${total}</span></h1><hr/>
            <div class="d-grid gap-2">
                <button type="button"   class="btn btn-warning" onClick={handleCheckout} > Checkout </button>
            </div>
            
        </div>
        </div> 
    </div>
  )
}

export default Cart
