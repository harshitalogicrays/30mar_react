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
import Counter from './components/06day/Counter'
import PasswordGenerator from './components/06day/PasswordGenerator'
import Refdemoinfun from './components/07day/Refdemoinfun'
import UseMemoHook from './components/07day/UseMemoHook'
import FunctionalRouting from './components/07day/FunctionalRouting'
import ClassRounting from './components/07day/ClassRounting'
import ClassPropsDemo from './components/07day/ClassPropsDemo'
import EventdemoinClass from './components/07day/EventdemoinClass'
import StateDemoinClass from './components/07day/StateDemoinClass'

const RoutingComp = () => {
  //routing - / (root) - http://localhost:3000
    return (
        <Routes>
            <Route path='/' element={<App/>}>
              <Route path='fun' element={<FunctionalRouting/>}>
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
                    <Route path='lifting' element={<Counter/>}/>
                    <Route path='usecallback' element={<PasswordGenerator/>}/>
                    <Route path='ref' element={<Refdemoinfun/>}/>
                    <Route path='memo' element={<UseMemoHook/>}/>
              </Route>
               
               <Route path='class' element={<ClassRounting/>}>
                  <Route path='' element={<ClassPropsDemo username="Meera" address="Pune"/>}/>
                  <Route path='event' element={<EventdemoinClass/>}/>
                  <Route path='state' element={<StateDemoinClass/>}/>
               </Route>
            </Route>


            <Route path="*" element={<Pagenotfound/>}/>
        </Routes>       
  )
}

export default RoutingComp
