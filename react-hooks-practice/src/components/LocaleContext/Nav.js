import React from "react";
import { Link } from "react-router-dom";
import LocaleContext from "./LocaleContext";

function EnglishNav({ toggleLocale }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/locale-context">Home</Link>
        </li>
        <li>
          <Link to="/locale-context/blog">Blog</Link>
        </li>
        <li>
          <Link to="/locale-context/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>Español</button>
    </nav>
  );
}

function SpanishNav({ toggleLocale }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/locale-context">Inicio</Link>
        </li>
        <li>
          <Link to="/locale-context/blog">Blog</Link>
        </li>
        <li>
          <Link to="/locale-context/about">Sobre Nosotros</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>English</button>
    </nav>
  );
}

export default function Nav() {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return locale === "en" ? (
    <EnglishNav toggleLocale={toggleLocale} />
  ) : (
    <SpanishNav toggleLocale={toggleLocale} />
  );
}
