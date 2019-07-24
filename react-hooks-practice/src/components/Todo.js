import React from "react";

import styles from "./Todo.module.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function generateID() {
    return (
        "_" +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
}

function Todo() {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState("");

    const handleSubmit = () => {
        setTodos((todos) =>
            todos.concat({
                text: input,
                id: generateID(),
            })
        );
        setInput("");
    };

    const removeTodo = (id) =>
        setTodos((todos) => todos.filter((t) => t.id !== id));

    return (
        <main>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter an item"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className={styles.addButton} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            <ul>
                {todos.map(({ text, id }) => (
                    <li key={id}>
                        <span>{text}</span>
                        <button
                            className={styles.removeButton}
                            onClick={() => removeTodo(id)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Todo;
