import React, { useState } from 'react'
import Image1 from '../../assets/images/a.jpg'
const Form1 = () => {
    let [num1,setNum1]=useState('')
    let [num2,setNum2]=useState('')
    let [result,setResult]=useState('')
    let handleNum1=(e)=>{
        console.log(e.target)
        setNum1(e.target.value)}
        let handleSubmit=(e)=>{
            e.preventDefault();setResult(parseInt(num1)+parseInt(num2))
        }
  return (
   <>
    <div className="container mt-5 p-2 shadow">
        <h1>Add Two numbers</h1><hr/>
        <div className="row">
            <div className="col">
                <img src={Image1} className='img-fluid'/>
            </div>
            <div className="col">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="num1" className="form-label">Num1</label>
                    <input type="text" name="num1"  className="form-control" value={num1} onChange={handleNum1}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="num2" className="form-label">Num2</label>
                    <input type="text" name="num2"  className="form-control" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary"> Add </button>             
            </form>

            {
                (num1!=''&& num2!='') ?
                <>
                    <h1>Num1  = {num1}</h1>
                    <h1>Num2  = {num2} </h1>
                    <h1>{result}</h1>
                </> : ''
            }

            
            </div>
        </div>
    </div>
   </>
  )
}

export default Form1
