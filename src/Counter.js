import React, { useState, useEffect } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    // Cleanup the timer when component unmounts
    return () => clearInterval(timer);
  }, [timer]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementIfOdd = () => {
    if (count % 2 !== 0) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const asyncIncrement = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const toggleTimer = () => {
    if (timerRunning) {
      clearInterval(timer);
      setTimerRunning(false);
    } else {
      const newTimer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setTimer(newTimer);
      setTimerRunning(true);
    }
  };

  return (
    <div className="container">
      <div className="counter">
        <h2>Current Count: {count}</h2>
      </div>
      <div className="button-row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div className="button-row">
        <button onClick={incrementIfOdd}>Increment If Odd</button>
        <button onClick={asyncIncrement}>Async Increment</button>
      </div>
      <div className="button-row">
        <button className="timer-button" onClick={toggleTimer}>
          {timerRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default Counter;
