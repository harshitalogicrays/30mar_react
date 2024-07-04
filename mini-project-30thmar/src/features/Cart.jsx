import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
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
                    <tr><td colSpan={7}>No item in cart</td></tr>
                    <tr class="">
                        <td scope="row">R1C1</td>
                        <td>R1C2</td>
                        <td>R1C3</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                        <td>Item</td>
                    </tr>
                </tbody>
            </table>
        </div>
       <div className="row">
        <div className="col-9">
            <button type="button" class="btn btn-danger btn-lg">Empty cart</button> <br/>
            <Link to='/products'><FaArrowCircleLeft/> Continue Shopping</Link>        
        </div>
        <div className="col">
            <h1>Total: <span className='float-end'>$0</span></h1><hr/>
            <div class="d-grid gap-2">
                <button type="button"   class="btn btn-warning"  > Checkout </button>
            </div>
            
        </div>
        </div> 
    </div>
  )
}

export default Cart
