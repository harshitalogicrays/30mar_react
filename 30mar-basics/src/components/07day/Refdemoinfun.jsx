import React, { useEffect, useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import Increase from './Increase'
import ForwardRefdemo from './ForwardRefdemo'

const Refdemoinfun = () => {
let inputRef =  useRef()
let focusRef=useRef()
let countRef=useRef()
let myRef=useRef()
let handleClick=()=>{
    alert(inputRef.current.value)
    inputRef.current.style.color="blue"
}
    useEffect(()=>{
        focusRef.current.focus()
    },[])

  return (
  <>
    <Form.Control ref={inputRef} defaultValue="Ram"></Form.Control>
    <Button onClick={handleClick}>Fetch Data</Button><hr/>
    <Form.Control ref={focusRef}></Form.Control><hr/>

    <input defaultValue={1} ref={countRef}/>
    <Increase innerRef={countRef}/><hr/>

    <ForwardRefdemo username="Siya" ref={myRef}/>
    <Button onClick={()=>myRef.current.focus()}>Focus on child textbox</Button><hr/>
  </>
  )
}

export default Refdemoinfun
