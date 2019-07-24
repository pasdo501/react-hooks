import React from "react";
import { Link } from "react-router-dom";

const Home = ({ destinations }) => (
    <div>
        This is the overview for all practice components.
        <ul>
            {destinations.map(({ text, link }) => (
                <li key={link}>
                    <Link to={link}>{text}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Home;
