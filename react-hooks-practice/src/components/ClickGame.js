import React, { useState, useRef, useEffect } from "react";

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds. 

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

function ClickGame() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const interval = useRef(null);

  function clear() {
    window.clearInterval(interval.current);
  }

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return clear;
  }, []);

  useEffect(() => {
    if (time === 0) {
      clear();
    }
  }, [time]);
  return (
    <main style={{ textAlign: `center` }}>
      <h1>{count}</h1>
      <h2>
        Time left: {time} second{time !== 1 ? "s" : ""}
      </h2>
      {time > 0 ? (
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      ) : null}
    </main>
  );
}

export default ClickGame;
