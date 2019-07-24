import React, { useState, useEffect } from "react";

/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds. 
*/

function useWait (delay) {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setReady(true)
        }, delay);

        return () => {
            clearTimeout(timeout);
            setReady(false)
        }
    }, [delay])

    return ready;
}

function Wait({ delay = 1000, placeholder, ui }) {
  const show = useWait(delay)

  return show === true
    ? ui
    : placeholder
}

function UseWait() {
  return (
    <main style={{ textAlign: `center` }}>
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </main>
  );
}

export default UseWait;
