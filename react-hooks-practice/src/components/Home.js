import React from "react";
import { Link } from "react-router-dom";

const Home = ({ destinations }) => (
    <main>
        <p>
            This is the overview for all practice components. The links
            displayed here are the same as in the nav bar (excluding this page itself).
        </p>
        <ul>
            {destinations.map(({ text, link }) => (
                <li key={link}>
                    <Link to={link}>{text}</Link>
                </li>
            ))}
        </ul>
    </main>
);

export default Home;
