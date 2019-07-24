import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Theme from "./components/Theme";
import Todo from "./components/Todo";
import ShowHide from "./components/ShowHide";

import "./App.css";

const makeDestinationObj = (link, text, component) => ({
    link,
    text,
    component,
});

function App() {
    const destinations = [
        makeDestinationObj("/theme", "Theme", Theme),
        makeDestinationObj("/todo", "Todo", Todo),
        makeDestinationObj("/show-hide", "Show/Hide", ShowHide),
    ];

    return (
        <Router>
            <div>
                <nav>
                    {[makeDestinationObj("/", "Overview"), ...destinations].map(
                        ({ link, text }) => (
                            <Link key={link} to={link}>
                                {text}
                            </Link>
                        )
                    )}
                </nav>

                <hr style={{ marginBottom: 0 }} />

                <Route
                    exact
                    path="/"
                    component={() => <Home destinations={destinations} />}
                />
                {destinations.map(({ link, component }) => (
                    <Route key={link} path={link} component={component} />
                ))}
            </div>
        </Router>
    );
}

export default App;
