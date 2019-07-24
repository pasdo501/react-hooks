import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div>
        This is the overview for all practice components.
        <ul>
            <li>
                <Link to="/show-hide">Show/Hide</Link>
            </li>
        </ul>
    </div>
)

export default Home;