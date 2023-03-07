import React, { Component, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [counter, setCounter] = useState(0);
  const [intervalID, setIntervalID] = useState();

  function handleStart() {
    if (!intervalID) {
      const id = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      setIntervalID(id);
    }
  }

  function handlePause() {
    clearInterval(intervalID);
    setIntervalID(undefined);
  }

  function handleReset() {
    handlePause();
    setCounter(0);
  }

  return (
    <div className="stopwatch">
      <h1>{counter}</h1>
      <div className="controls">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

export default Stopwatch;
