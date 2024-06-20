import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import ClassLinks from './ClassLinks'

export default class ClassRounting extends Component {
  render() {
    return (
        <div className='row'>
          <div className='col-3'>  <ClassLinks/> </div>
          <div className='col'>   <Outlet/>  </div>
        </div> 
    )
  }
}
