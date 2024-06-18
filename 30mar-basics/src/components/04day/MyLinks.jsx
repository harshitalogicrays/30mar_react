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
    <li className="nav-item"> <Link className="nav-link" to='/form/validation'>Form Validations</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/rbdemo'>React Bootstrap demo </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='form/hook'>React Hook Form demo </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='lifting'>Lifting the state up demo </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='usecallback'>useCallback, useEffect demo </Link ></li>
  
  </ul>
  )
}

export default MyLinks
