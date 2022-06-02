
import './App.css';
import Timer from "./Components/Timer"
import Stopwatch from './Components/Stopwatch';
import { useState } from 'react';

function App() {

  const [show,setShow]=useState(true)

  // const handleChange= () => setShow(true)

  
  
  return (
    <div className="App">

<div className='container'>

      <div className='bigdiv'>
        <div onClick={()=>{if(show==false)setShow(!show)}}>Timer</div>
        <div onClick={()=>{if(show==true)setShow(!show)}}>Stopwatch</div>
      </div>
      
  {
    show ? <Timer/>:<Stopwatch/>
  }


    
</div>

    </div>
  );
}

export default App;
