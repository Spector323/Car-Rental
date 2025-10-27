import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="container-hr">
                <div className="logo">
                    <img src="./accets/header/logo.svg" alt="Car Rental Logo" />
                    <span className="logo-text">Car Rental</span>
                </div>

                <nav className="nav">
                            <a href="/" className="nav-link">Home</a>
                            <a href="/vehicles" className="nav-link">Vehicles</a>
                            <a href="/details" className="nav-link">Details</a>
                            <a href="/about" className="nav-link">About Us</a>
                </nav>

                <div className="contact">
                    <div className="contact-icon">
                        <img src="./accets/header/bg.svg" alt="Phone" />
                    </div>
                    <div className="contact-info">
                        <span className="contact-label">Need help?</span>
                        <span className="contact-number">+7(928) 092-8761</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;