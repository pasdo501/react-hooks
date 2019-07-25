import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./LocaleContext/Nav";
import Home from "./LocaleContext/Home";
import Blog from "./LocaleContext/Blog";
import About from "./LocaleContext/About";
import LocaleContext from "./LocaleContext/LocaleContext";

import styles from "./LocaleContext.module.scss";

/*
  Instructions:
    You're given a full app that uses Context.Consumer
    in order to grab values off of context. Your job is to 
    refactor all of those to use the `useContext` Hook.
*/

function LocaleContextRoot () {
  const [locale, setLocale] = React.useState('en')

  const toggleLocale = () => {
    setLocale((locale) => {
      return locale === 'en' ? 'es' : 'en'
    })
  }

  const value = React.useMemo(() => ({
    locale,
    toggleLocale
  }), [locale])

  return (
    <Router>
      <main className={styles.localeApp}>
        <LocaleContext.Provider value={value}>
          <Nav />
          <Route path="/locale-context" exact component={Home} />
          <Route path="/locale-context/blog" component={Blog} />
          <Route path="/locale-context/about" component={About} />
        </LocaleContext.Provider>
      </main>
    </Router>
  )
}

export default LocaleContextRoot;
