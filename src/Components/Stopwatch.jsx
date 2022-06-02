import React from "react";
import { useState, useRef } from "react";
import styles from "./styles.module.css";

const Stopwatch = () => {
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
  // console.log(msToTime(300000))

  const Start = () => {
    if (!timerid.current) {
      let id = setInterval(() => {
        setTimer((prev) => prev + 100);
      }, 100);
      // setTimer(id);
      timerid.current = id;
    }
  };

  const Stop = () => {
    clearInterval(timerid.current);

    timerid.current = null;
  };

  const Reset = () => {
    clearInterval(timerid.current);
    setTimer(0);
    timerid.current = null;
  };

  return (
    <div>
      <h2>Stopwatch</h2>

      <h2>{msToTime(timer)}</h2>

      <div className="displaybuttons">
        <button className={styles.startbutton} onClick={Start}>
          Start
        </button>
        <button className={styles.resetbutton} onClick={Reset}>
          Reset
        </button>

        <button className={styles.stopbutton} onClick={Stop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
