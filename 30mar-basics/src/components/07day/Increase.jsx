import React from 'react'
import { Button } from 'react-bootstrap'

const Increase = ({innerRef}) => {
  return (
   <>
    <Button 
    onClick={()=>innerRef.current.value++}>+</Button>
   </>
  )
}

export default Increase
