import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Theme from "./components/Theme";
import Todo from "./components/Todo";
import ShowHide from "./components/ShowHide";
import CharacterLimit from "./components/CharacterLimit";
import WaitDelay from "./components/WaitDelay";
import ApiRequests from "./components/ApiRequests";
import UseWait from "./components/UseWait";
import UseWindowDimensions from "./components/UseWindowDimensions";
import UseFetch from "./components/UseFetch";
import UseFetchReducer from "./components/UseFetchReducer";
import ComplexForm from "./components/ComplexForm";
import ClickGame from "./components/ClickGame";
import LocaleContextRoot from "./components/LocaleContext";

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
    makeDestinationObj("/character-limit", "Character Limit", CharacterLimit),
    makeDestinationObj("/wait-delay", "Wait/Delay", WaitDelay),
    makeDestinationObj("/api-requests", "API Requests", ApiRequests),
    makeDestinationObj("/use-wait", "useWait", UseWait),
    makeDestinationObj(
      "/use-window-dimensions",
      "useWindowDimensions",
      UseWindowDimensions
    ),
    makeDestinationObj("/use-fetch", "useFetch", UseFetch),
    makeDestinationObj(
      "/use-fetch-reducer",
      "useFetch (reducer)",
      UseFetchReducer
    ),
    makeDestinationObj("/complex-form", "Complex Form", ComplexForm),
    makeDestinationObj("/click-game", "Click Game", ClickGame),
    makeDestinationObj("/locale-context", "Locale Context", LocaleContextRoot),
  ];

  return (
    <Router>
      <div>
        <nav>
          {[makeDestinationObj("/", "Overview"), ...destinations].map(
            ({ link, text }) => (
              <NavLink exact key={link} to={link}>
                {text}
              </NavLink>
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
