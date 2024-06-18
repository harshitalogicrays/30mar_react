import React from 'react'
import { Button } from 'react-bootstrap'

const Increase = ({handle}) => {
  return (
   <>
    <Button className='me-2' variant='danger' onClick={()=>handle(1)}>Increase by 1</Button>
    <Button onClick={()=>handle(5)}>Increase by 5</Button>
   </>
  )
}

export default Increase
