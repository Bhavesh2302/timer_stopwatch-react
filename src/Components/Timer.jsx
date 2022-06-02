import React, {  useState, useRef } from "react";
import styles from "./styles.module.css"

const Timer = () => {

  const timerid = useRef(null);


  const [input,setIshow]=useState(0)
  // const input=useRef(null)

let [timer, setTimer] = useState(300000);

const timerinput = (i) => {
  setTimer(i * 60000);
  // setinput()
  Start();
};
  
 

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  // console.log(msToTime(300000))



  


  

  const Start = () => {


    
    if (!timerid.current) {
      let id = setInterval(() => {
        setTimer((prev )=>prev-100);
      }, 100);
      // setTimer(id);
timerid.current=id





    }
  };

  
  const Stop = () => {
     
    clearInterval(timerid.current);
  
    timerid.current = null;
  };

  const Reset = () => {
     
    clearInterval(timerid.current);
    setTimer(300000);
    timerid.current = null;
  };

  return (
    <div>

      <h2>  Timer
    </h2>
    
    

      <div>
      
      <input type="number" onChange={(e)=>timerinput(e.target.value)} placeholder="Enter Time in Minutes..."/>
      <h2>{msToTime(timer)}</h2>


      <button className={styles.startbutton}onClick={Start}>Start</button>
      <button className={styles.resetbutton}onClick={Reset}>Reset</button>

      <button className={styles.stopbutton}onClick={Stop}>Stop</button>
      </div>
     
    </div>
  );
};

export default Timer;
