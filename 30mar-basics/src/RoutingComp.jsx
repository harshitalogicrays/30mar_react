import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Childrenpropsdemoinfun from './components/02day/Childrenpropsdemoinfun'
import Eventinfuncomp from './components/01day/Eventinfuncomp'
import Statevariable from './components/02day/Statevariable'
import CounterApp from './components/02day/CounterApp'
import ConditionalRendering from './components/03day/ConditionalRendering'
import Products from './components/04day/Products'
import Register from './components/03day/Register'
import App from './App'
import Pagenotfound from './components/04day/Pagenotfound'
import FormValidations from './components/05day/FormValidations'
import ReactBootstrap from './components/05day/ReactBootstrap'
import Reacthookform from './components/05day/Reacthookform'

const RoutingComp = () => {
  //routing - / (root) - http://localhost:3000
    return (
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path="" element={<Childrenpropsdemoinfun/>}></Route>
                <Route path="event" element={<Eventinfuncomp/>}/>
                <Route path='state' element={<Statevariable/>}/>
                <Route path="counter" element={<CounterApp/>}/>
                <Route path='condition' element={<ConditionalRendering/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='form' element={<Register/>}/>
                <Route path='form/validation' element={<FormValidations/>}/>
                <Route path='rbdemo' element={<ReactBootstrap/>}/>
                <Route path='form/hook' element={<Reacthookform/>}/>
            </Route>


            <Route path="*" element={<Pagenotfound/>}/>
        </Routes>       
  )
}

export default RoutingComp
