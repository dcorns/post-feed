/**
 * Home
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */

import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => (
    <div>
        <h1>Pseudo Site</h1>
        <p>For demonstrating posting challenge using react and redux</p>
        <ul>
            <li>
                <Link to={"posts"}>
                    Posts
                </Link>
            </li>
            <li>
                <Link to={"about"}>
                    About
                </Link>
            </li>
        </ul>
    </div>
);

export default Home;