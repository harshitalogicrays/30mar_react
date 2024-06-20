import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    let [count,setCount]=useState(0)
    let [show,setShow]=useState(false)
    let handleClick=()=>setCount(count+1)
    const countNum=(num)=>{
        console.log("countNum called")
        for(let i=1;i<=1000000;i++){}
        return num
    }

    // const checkdata = countNum(count)
    const checkdata=useMemo(()=>{return countNum(count)},[count])
  return (
    <>
        <button type="button" class="btn btn-primary m-3"  onClick={handleClick}>Counter</button>
        <br/>
        <h1>{checkdata}</h1>
        <button type="button" class="btn btn-primary m-3"  onClick={()=>setShow(!show)}>
            {show?"OK":"Not Ok"}
        </button>
        
    </>
  )
}

export default UseMemoHook
