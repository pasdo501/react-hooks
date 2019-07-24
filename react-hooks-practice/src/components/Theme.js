import React from "react";
import styles from "./Theme.module.css";

/*
  INSTRUCTIONS:
  Convert the code below from a Class component
  using setState to a function component using 
  the useState Hook.
*/

/**
 * Before:
class Theme extends React.Component {
    state = {
        theme: "light",
    };
    toDark = () => this.setState({ theme: "dark" });
    toLight = () => this.setState({ theme: "light" });
    render() {
        const { theme } = this.state;

        return (
            <main className={theme}>
                {theme === "light" ? (
                    <button onClick={this.toDark}>🔦</button>
                ) : (
                    <button onClick={this.toLight}>💡</button>
                )}
            </main>
        );
    }
}
*/

/** After: */
const Theme = () => {
    const [theme, setTheme] = React.useState("light");

    const toDark = () => setTheme("dark");
    const toLight = () => setTheme("light");

    return (
        <main className={styles[theme]}>
            {theme === "light" ? (
                <button className={styles.button} onClick={toDark}>
                    <span role="img" aria-label="Flashlight">
                        🔦
                    </span>
                </button>
            ) : (
                <button className={styles.button} onClick={toLight}>
                    <span role="img" aria-label="Lightbulb">
                        💡
                    </span>
                </button>
            )}
        </main>
    );
};

export default Theme;
