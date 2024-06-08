import React, { useState } from 'react'

const Statevariable = () => {
    // let num1 =10
    // let num2 = 20
    // let result = 0
    // let handleAdd=()=>{
    //     result = num1 +num2
    //     console.log(result)
    // }

    let [num1]=React.useState(10)
    let [num2]=useState(20)
    let [result,setResult]=useState('')
    let handleAdd=()=>{
        setResult(num1+num2)}
  return (
    <> <button type="button" className="btn btn-primary" onClick={handleAdd}>
            Add</button>
     <h1>Num1 = {num1} and Num2={num2}</h1>
      <h1>Result =  {result}</h1>        
    </>
  )
}

export default Statevariable
