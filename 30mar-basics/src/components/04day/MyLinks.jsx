import React from 'react'
import { Link } from 'react-router-dom'

const MyLinks = () => {
  return (
    <ul className="nav flex-column">
    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/fun'>Props Demo</Link></li>
    <li className="nav-item">  <Link className="nav-link" to='/fun/state'>state demo</Link >  </li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/event'>event demo</Link >  </li>
    <li className="nav-item"> <Link className="nav-link"  to='/fun/counter'>Counter</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/form'>form</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/condition'>conditional rendering</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/products'>Product in card</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/form/validation'>Form Validations</Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/rbdemo'>React Bootstrap demo </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/form/hook'>React Hook Form demo </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/lifting'>Lifting the state up demo </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/usecallback'>useCallback, useEffect demo </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/ref'>uncontrolled component (ref) </Link ></li>
    <li className="nav-item"> <Link className="nav-link" to='/fun/memo'>useMemo Hook </Link ></li>
  </ul>
  )
}

export default MyLinks
