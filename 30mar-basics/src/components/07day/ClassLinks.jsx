import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClassLinks extends Component {
  render() {
    return (
      <ul className="nav flex-column">
      <li className="nav-item"><Link className="nav-link" aria-current="page" to='/class'>Props Demo</Link></li>
      <li className="nav-item">  <Link className="nav-link" to='/class/state'>state demo</Link >  </li>
      <li className="nav-item"> <Link className="nav-link" to='/class/event'>event demo</Link >  </li>
      <li className="nav-item"> <Link className="nav-link" to='/class/form'>form</Link ></li>
      <li className="nav-item"> <Link className="nav-link" to='/class/ref'>uncontrolled component (ref) </Link ></li>
      <li className="nav-item"> <Link className="nav-link" to='/class/pure'>Pure Component </Link ></li>
      <li className="nav-item"> <Link className="nav-link" to='/class/lifecycle'>LifeCycle Methods</Link ></li>
    
      </ul>
    )
  }
}
