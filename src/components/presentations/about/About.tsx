/**
 * About
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */

import React from 'react';

const About = () => (
    <div>
        <h2>About</h2>
        <p>Fetch posts and comments API's and present a list of posts and when a post is clicked show the list of
            comments associated with it</p>
        <h3>Assumptions and design decisions</h3>
        <p>Use typescript for latest javascript features, more descriptive code and code completion</p>
        <p>Use a consistent name convention with components and css</p>
        <p>Use a descriptive file structure for locating container or presentation components</p>
        <p>Use tsx for presentational components</p>
        <p>Use React.Strict to avoid common errors found during development</p>
        <p>Fix all security issues with dependencies using npm audit fix</p>
        <p>Convert comments array to object map for more efficient searching</p>
        <p>Using redux-thunk to avoid passing dispatch for async calls to keep action calls consistent between sync and async</p>

    </div>
);

export default About;