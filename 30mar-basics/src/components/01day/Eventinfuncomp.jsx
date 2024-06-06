import React from 'react'

const Eventinfuncomp = () => {
    let handleClick = ()=>{
        alert("hello handleclick called")
    }
    let handleClick1=(a,b)=>{
        alert(a+b)
    }
  return (
    <>
      <button type="button" class="btn btn-primary me-2" onClick={()=>alert("button clicked")}>Click Me</button>
      <button type="button" class="btn btn-primary me-2" onClick={handleClick}>Click Me</button>
      <button type="button" class="btn btn-primary me-2" onClick={()=>handleClick()}>Click Me</button>
      <button type="button" class="btn btn-primary me-2" onClick={()=>handleClick1(2,3)}>Click Me</button>
    </>
  )
}

export default Eventinfuncomp
