import React from 'react'
import MyLinks from '../04day/MyLinks'
import { Outlet } from 'react-router-dom'

const FunctionalRouting = () => {
  return (
   <div className='row'>
          <div className='col-3'>  <MyLinks/> </div>
          <div className='col'>   <Outlet/>  </div>
        </div> 
  )
}

export default FunctionalRouting
