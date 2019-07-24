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
    const timeout = setTimeout(() => {
      console.log("No longer waiting");
      setWaiting(false);
    }, delay);

    return () => {
        console.log('Cleaning up');
      clearTimeout(timeout);
      setWaiting(true);
    };
  }, [delay]);

  return waiting ? placeholder : ui;
}

function WaitDelay() {
  return (
    <main style={{ textAlign: "center" }}>
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </main>
  );
}

export default WaitDelay;
