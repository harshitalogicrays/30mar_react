import { useState } from 'react';
import './App.css';
import Eventinfuncomp from './components/01day/Eventinfuncomp';
import Firstclasscomp from './components/01day/Firstclasscomp';
import Firstfuncomp from './components/01day/Firstfuncomp';
import Funcomppropsdemo from './components/01day/Funcomppropsdemo';
import Childrenpropsdemoinfun from './components/02day/Childrenpropsdemoinfun';
import CounterApp from './components/02day/CounterApp';
import Form1 from './components/02day/Form1';
import Statevariable from './components/02day/Statevariable';
import ConditionalRendering from './components/03day/ConditionalRendering';
import Register from './components/03day/Register';
import Register1 from './components/03day/Register1';
import ListRendering from './components/03day/ListRendering';
function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(false) //state is private 
  //we can not send it directly to the child, we can assign state value to props and can send to the children comp
  return (
    <div className='container mt-5 p02'>
         <h1 className='text-danger'>Hello React</h1>
        
        {/* <Firstfuncomp/>
        <Firstclasscomp></Firstclasscomp><hr/>
        <Funcomppropsdemo username="happy" address="pune" mobile={9087654321}
        isMarried={true}></Funcomppropsdemo><hr/>
        <Eventinfuncomp/> */}
        {/* <Childrenpropsdemoinfun username={12345}  mobile={9087654321}>
            <h2>Welcome to LRA</h2>
            <Firstfuncomp/>
        </Childrenpropsdemoinfun><hr/>

        <Childrenpropsdemoinfun mobile={1234567890}>
          <h3>children</h3>
        </Childrenpropsdemoinfun> */}

        {/* <Statevariable/> */}
        {/* <CounterApp/> */}
        {/* <Form1/> */}

        {/* <Register/> */}
        {/* <Register1/> */}

{/* <button
  type="button"
  class="btn btn-primary" 
  onClick={()=>setIsLoggedIn(!isLoggedIn)}
>
  {isLoggedIn ? "Logout" :"Login"}
</button>


        <ConditionalRendering  loggedIn={isLoggedIn} username="Happy"/> */}

        <ListRendering/>
    </div>
  );     
}

export default App;
