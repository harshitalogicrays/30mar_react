import React, { useState } from 'react'

const CounterApp = () => {
    let [count,setCount]=useState('')
    let increase=()=>{
        setCount(parseInt(count+1))
    }
    let decrease=()=>{
        if(count > 1){
            // setCount(parseInt(count-1))
            setCount((p)=>parseInt(p-1))
        }          
        else 
            setCount(1)
    }
  return (
    <>  
        <button type="button" className="btn btn-primary me-2" onClick={increase}>Increase</button>
        <button type="button" className="btn btn-primary" onClick={decrease}>decrease</button>
        <h1>{count}</h1>
  </>

  )
}

export default CounterApp
