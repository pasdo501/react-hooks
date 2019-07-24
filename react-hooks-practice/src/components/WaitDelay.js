import React, { useState, useEffect } from "react";

/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

function Wait({ delay = 1000, placeholder, ui }) {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    console.log("In useEffect");
    setWaiting(true);
    const timeout = setTimeout(() => {
      console.log("No longer waiting");
      setWaiting(false);
    }, delay);

    return () => {
      console.log("Cleaning up");
      clearTimeout(timeout);
    };
  }, [delay, placeholder, ui]);

  return waiting === true ? placeholder : ui;
}

function WaitDelay() {
  const [toggle, setToggle] = useState(false);

  return (
    <main style={{ textAlign: "center" }}>
      <button onClick={() => setToggle(!toggle)}>Toggle loading text</button>
      <Wait
        delay={3000}
        placeholder={toggle ? <p>Waiting...</p> : <p>Loading...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
      <p>
        <em style={{ fontSize: `.65rem` }}>
          Toggling the loading text will also reset the waiting timeout.
        </em>
      </p>
    </main>
  );
}

export default WaitDelay;
