import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="./accets/logo.svg" alt="Car Rental Logo" />
                    <span className="logo-text">Car Rental</span>
                </div>

                <nav className="nav">
                            <a href="#" className="nav-link">Home</a>
                            <a href="#" className="nav-link">Vehicles</a>
                            <a href="#" className="nav-link">Details</a>
                            <a href="#" className="nav-link">About Us</a>
                            <a href="#" className="nav-link">Contact Us</a>
                </nav>

                <div className="contact">
                    <div className="contact-icon">
                        <img src="./accets/icon+bg.svg" alt="Phone" />
                    </div>
                    <div className="contact-info">
                        <span className="contact-label">Need help?</span>
                        <span className="contact-number">+996 247-1680</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;