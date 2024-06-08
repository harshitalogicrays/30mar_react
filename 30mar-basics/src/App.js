import './App.css';
import Eventinfuncomp from './components/01day/Eventinfuncomp';
import Firstclasscomp from './components/01day/Firstclasscomp';
import Firstfuncomp from './components/01day/Firstfuncomp';
import Funcomppropsdemo from './components/01day/Funcomppropsdemo';
import Childrenpropsdemoinfun from './components/02day/Childrenpropsdemoinfun';
import CounterApp from './components/02day/CounterApp';
import Form1 from './components/02day/Form1';
import Statevariable from './components/02day/Statevariable';
function App() {
  return (
    <div>
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
        <Form1/>
    </div>
  );     
}

export default App;
