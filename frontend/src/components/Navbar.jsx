import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">Verosha</a>
                <nav className="navbar-links">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;