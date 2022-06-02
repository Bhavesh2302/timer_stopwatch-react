import React, { useState } from 'react'
import Timer from './Timer';

const Input = () => {


    const [show,setShow]=useState(true)



    const [timer, setTimer] = useState(0);
  const timerid = useRef(null);

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  return (
    <div>
      <div>
        <input type="text" onClick={()=>setShow(!show)} />
        <div onClick={()=>setShow(!show)}>Stopwatch</div>
      </div>
      
  {
    show ? <Input/>:<Timer/>
  }

    </div>
  )
}

export default Input