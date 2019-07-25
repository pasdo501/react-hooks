import React from "react";
import { NavLink } from "react-router-dom";
import LocaleContext from "./LocaleContext";

function EnglishNav({ toggleLocale }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/locale-context">Home</NavLink>
        </li>
        <li>
          <NavLink to="/locale-context/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/locale-context/about">About</NavLink>
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
          <NavLink exact to="/locale-context">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/locale-context/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/locale-context/about">Sobre Nosotros</NavLink>
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
