import React from 'react';
import './Header.css'; // Create a CSS file for styling

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-logo">DSA Visualizer</div>
                <ul className="navbar-links">
                    <li><a href="#visualization">Visualizations</a></li>
                    <li><a href="#programming">Programming Tutorials</a></li>
                    <li><a href="#compiler">Online Compiler</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
