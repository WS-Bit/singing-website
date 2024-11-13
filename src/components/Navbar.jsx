import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleBurger = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img
                        src="/WSE.png"
                        alt="Logo"
                    />
                </a>

                <a
                    role="button"
                    className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={toggleBurger}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <a href="/" className="navbar-item">Home</a>
                    <a href="/info" className="navbar-item">Info</a>
                    <a href="/content" className="navbar-item">Content</a>
                    <a href="/contact" className="navbar-item">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;