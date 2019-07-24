import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import ShowHide from "./components/ShowHide";

import "./App.css"

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                </nav>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/show-hide" component={ShowHide} />
            </div>
        </Router>
    );
}

export default App;
