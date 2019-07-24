import React, { useState, useEffect } from "react";

import styles from "./CharacterLimit.module.scss";

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

function CharacterLimit() {
  const [input, setInput] = useState("");

  useEffect(() => {
    const charsLeft = 240 - input.length;
    const titleText =
      charsLeft >= 0
        ? `${charsLeft} character${charsLeft === 1 ? "" : "s"} left.`
        : `${Math.abs(charsLeft)} too many characters entered.`;
    document.title = titleText;
  }, [input]);

  return (
    <main className={styles.main}>
      <textarea
        className={styles.textarea}
        placeholder="What's on your mind?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button disabled={input.length === 0 || input.length > 240}>
        Submit
      </button>
    </main>
  );
}

export default CharacterLimit;
