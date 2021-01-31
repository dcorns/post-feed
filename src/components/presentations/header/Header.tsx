/**
 * Header
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */

import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const activeStyle = {color: "#F15B2A"}
    return (
        <div className={'freeze'}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><NavLink to={'/'}>Pseudo Site</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to={'/'} activeStyle={activeStyle} exact className={'nav-item'}>Home</NavLink>
                        <NavLink to={'/posts'} activeStyle={activeStyle} className={'nav-item'}>Posts</NavLink>
                        <NavLink to={'/about'} activeStyle={activeStyle} className={'nav-item'}>About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default Header;