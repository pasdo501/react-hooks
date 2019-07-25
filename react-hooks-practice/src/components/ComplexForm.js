import React, { useRef } from "react";

/*
  Instructions:
    You're given the UI for a basic form. Your task is to 
    hook it all up using refs. 

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to 
    empty strings.
*/

function ComplexForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.group("Form Submit");
    console.log(nameField.current.value);
    console.log(emailField.current.value);
    console.log(passwordField.current.value);
    console.groupEnd();
  };

  const handleReset = () => {
    nameField.current.value = "";
    emailField.current.value = "";
    passwordField.current.value = "";
  };

  const nameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();

  return (
    <React.Fragment>
      <label style={{ display: `block` }}>
        Name:
        <input placeholder="name" type="text" ref={nameField} />
      </label>
      <label style={{ display: `block` }}>
        Email:
        <input placeholder="email" type="text" ref={emailField} />
      </label>
      <label style={{ display: `block` }}>
        Password:
        <input placeholder="password" type="text" ref={passwordField} />
      </label>

      <hr />

      <button onClick={() => nameField.current.focus()}>
        Focus Name Input
      </button>
      <button onClick={() => emailField.current.focus()}>
        Focus Email Input
      </button>
      <button onClick={() => passwordField.current.focus()}>
        Focus Password Input
      </button>

      <hr />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  );
}

export default ComplexForm;
