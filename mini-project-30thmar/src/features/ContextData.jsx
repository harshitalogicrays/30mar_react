import React, { useState } from 'react'
import { toast } from 'react-toastify'
export const myContext=React.createContext()
const ContextData = ({children}) => {
    const [cartItems,setCartItems]=useState([])
    const [total,setTotal]=useState(0)
    const addtocart=(product)=>{
      if(sessionStorage.getItem("30marmini") == null){
        toast.error("please login first")
      }
      else {
          const itemIndex = cartItems.findIndex(item=>item.id==product.id)
          if(itemIndex ==-1){
            setCartItems([...cartItems,{...product,qty:1}])
            toast.success(`${product.name} added to cart`)
          }
       else toast.info(`${product.name} already added to cart`)
      }
    }
    const increase=(product)=>{
      const itemIndex = cartItems.findIndex(item=>item.id==product.id)
      if(itemIndex != -1){
        if(cartItems[itemIndex].qty < product.stock)
          cartItems[itemIndex].qty++
        else toast.info(`only ${product.stock} qty available`)
      }
      setCartItems([...cartItems])
    }
    const decrease=(product)=>{
      const itemIndex = cartItems.findIndex(item=>item.id==product.id)
      if(itemIndex != -1){
        if(cartItems[itemIndex].qty > 1)
          cartItems[itemIndex].qty--
        else  cartItems[itemIndex].qty=1
      }
      setCartItems([...cartItems])
    }
    const removefromcart=(id)=>{
      // const filters = cartItems.filter(item=>item.id !=id)
      // setCartItems(filters)

      const itemIndex = cartItems.findIndex(item=>item.id==id)
      cartItems.splice(itemIndex,1)
      setCartItems([...cartItems])
    }
    const emptycart=()=>{
      setCartItems([]);setTotal(0)
    }
    const calculate_total=()=>{
      const t= cartItems.reduce((prev,curr)=>{return prev+curr.qty*curr.price},0)
      setTotal(t)
    }
    //prev=0 , curr =1000*2 = 2000
    //prev = 2000 , curr=10000*1 = 12000
    //prev=12000 , curr = 8000*1 = 200000
  return (
    <myContext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculate_total,setCartItems}}>
        {children}
    </myContext.Provider>
  )
}

export default ContextData
