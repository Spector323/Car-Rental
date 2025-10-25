import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <div className="logo">
            <img src="./accets/logo.svg" alt="Car Rental Logo" />
            <span className="logo-text">Car Rental</span>
          </div>
          <p className="footer-description">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <img src="./accets/icon/fs.png" alt="Facebook" />
            </a>
            <a href="#" className="social-link">
              <img src="./accets/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="social-link">
              <img src="./accets/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="social-link">
              <img src="./accets/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Useful links</h3>
          <a href="#" className="footer-link">About us</a>
          <a href="#" className="footer-link">Contact us</a>
          <a href="#" className="footer-link">Gallery</a>
          <a href="#" className="footer-link">Blog</a>
          <a href="#" className="footer-link">F.A.Q</a>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Vehicles</h3>
          <a href="#" className="footer-link">Sedan</a>
          <a href="#" className="footer-link">Cabriolet</a>
          <a href="#" className="footer-link">Pickup</a>
          <a href="#" className="footer-link">Minivan</a>
          <a href="#" className="footer-link">SUV</a>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Download App</h3>
          <a href="#" className="app-button">
            <img src="./accets/appstore.svg" alt="App Store" />
            <span>Download on the App Store</span>
          </a>
          <a href="#" className="app-button">
            <img src="./accets/googleplay.svg" alt="Google Play" />
            <span>GET IT ON Google Play</span>
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>© Copyright Car Rental 2024. Design by Figma.guru</p>
      </div>
    </footer>
  );
}

export default Footer;