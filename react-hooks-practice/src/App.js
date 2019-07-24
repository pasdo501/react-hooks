import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Theme from "./components/Theme";
import ShowHide from "./components/ShowHide";

import "./App.css";

const makeDestinationObj = (link, text) => ({ link, text });

function App() {
    const destinations = [
        makeDestinationObj("/theme", "Theme"),
        makeDestinationObj("/show-hide", "Show/Hide"),
    ];

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                </nav>

                <hr />

                <Route
                    exact
                    path="/"
                    component={() => <Home destinations={destinations} />}
                />
                <Route path="/show-hide" component={ShowHide} />
                <Route path="/theme" component={Theme} />
            </div>
        </Router>
    );
}

export default App;
