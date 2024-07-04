import React, { useState } from 'react'
export const myContext=React.createContext()
const ContextData = ({children}) => {
    const [cartItems,setCartItems]=useState([])
    const [total,setTotal]=useState(0)
    const addtocart=()=>{}
    const increase=()=>{}
    const decrease=()=>{}
    const removefromcart=()=>{}
    const emptycart=()=>{}
    const calculate_total=()=>{}
  return (
    <myContext.Provider value={{cartItems,total,addtocart,increase,decrease,removefromcart,emptycart,calculate_total}}>
        {children}
    </myContext.Provider>
  )
}

export default ContextData
