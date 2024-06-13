import React from 'react'
import { Link } from 'react-router-dom'

const MyLinks = () => {
  return (
    <ul className="nav flex-column">
    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/'>Props Demo</Link></li>
    <li className="nav-item">  <Link className="nav-link" to='/state'>state demo</Link >  </li>
    <li className="nav-item"> <Link className="nav-link" to='/event'>event demo</Link >  </li>
    <li className="nav-item"> <Link className="nav-link"  to='/counter'>Counter</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/form'>form</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/condition'>conditional rendering</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/products'>Product in card</Link ></li>
  </ul>
  )
}

export default MyLinks
