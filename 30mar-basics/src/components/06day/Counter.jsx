import React, { useState } from 'react'
import Increase from './Increase'
import { Button } from 'react-bootstrap'

const Counter = () => {
    let [count,setCount]=useState('')
    let handleIncrease=(v)=>{
        setCount(parseInt(count+v))
    }
  return (
   <>
    <h1>count: {count}</h1>
    <Increase handle={handleIncrease}/>
   </>
  )
}

export default Counter
