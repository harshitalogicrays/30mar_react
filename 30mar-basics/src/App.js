import './App.css';
import Eventinfuncomp from './components/01day/Eventinfuncomp';
import Firstclasscomp from './components/01day/Firstclasscomp';
import Firstfuncomp from './components/01day/Firstfuncomp';
import Funcomppropsdemo from './components/01day/Funcomppropsdemo';
function App() {
  return (
    <div className='App'>
         <h1 className='text-danger'>Hello React</h1>
        <h2>Welcome to LRA</h2>
        <Firstfuncomp/>
        <Firstclasscomp></Firstclasscomp><hr/>
        <Funcomppropsdemo username="happy" address="pune" mobile={9087654321}
        isMarried={true}></Funcomppropsdemo><hr/>
        <Eventinfuncomp/>
    </div>
  );     
}

export default App;
