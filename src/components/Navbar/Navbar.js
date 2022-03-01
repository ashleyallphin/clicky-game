import React from 'react';
import "./Navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import logo from '../../assets/images/braves-A-onnavy.svg'

const Nav = () => (
<Navbar
        className="Navbar"
        bg="dark"
        variant="dark">
        <NavbarBrand href="#home">
            <img
                alt="Braves Logo"
                src={logo}
            />{' '}
            Braves World Series Memory Game
        </NavbarBrand>
    </Navbar>
);

export default Nav;