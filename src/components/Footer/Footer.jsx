import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-ft">
        <div className="cn-brand">
          <div className="logo">
            <img src="./accets/header/logo.svg" alt="Car Rental Logo" />
            <span className="logo-text">Car Rental</span>
          </div>
          <div className="footer-brand">
            <img src="./accets/footer/address.png" alt="Car Rental Logo" />
            <p>
              Address <br />
              <b>Oxford Ave. Cary, NC 27511</b>
            </p>
          </div>
          <div className="footer-brand">
            <img src="./accets/footer/email.png" alt="Car Rental Logo" />
            <p>
              Email <br />
              <b>amiraldiev752@gmail.com</b>
            </p>
          </div>
          <div className="footer-brand">
            <img src="./accets/footer/phone.png" alt="Car Rental Logo" />
            <p>
              Phone <br />
              <b>+7(928) 092-8761</b>
            </p>
          </div>
        </div>
        <div className="cn-column">
          <div className="footer-column">
            <p className="footer-description">
              Faucibus faucibus <br />
              pellentesque dictum turpis. <br />
              Id pellentesque turpis <br />
              massa a id iaculis lorem t...
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src="./accets/footer/fs.png" alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <img src="./accets/footer/ins.png" alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <img src="./accets/footer/x.png" alt="Twitter" />
              </a>
              <a href="#" className="social-link">
                <img src="./accets/footer/yt.png" alt="YouTube" />
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
              <img src="./accets/footer/apple.png" alt="App Store" />
              <span>Download on the <br /> App Store</span>
            </a>
            <a href="#" className="app-button">
              <img src="./accets/footer/googleplay.png" alt="Google Play" />
              <span>GET IT ON <br /> Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;