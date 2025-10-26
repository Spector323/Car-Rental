// src/pages/Home.jsx
import React from 'react';
import './home.css';

function Home() {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container-hm">
          <div className="hero-content">
            <h1 className="hero-title">Experience the road like never before</h1>
            <p className="hero-description">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.
              Quis nunc interdum gravida ullamcorper
            </p>
            <button className="hero-button">View all cars</button>
          </div>
          <div className="booking-form">
            <h2 className="form-title">Book your car</h2>
            <form className="form">
              <select className="form-select">
                <option value="">Car type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="pickup">Pickup</option>
              </select>
              <select className="form-select">
                <option value="">Place of rental</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
              </select>
              <select className="form-select">
                <option value="">Place of return</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
              </select>
              <input type="date" className="form-input" placeholder="Rental date" />
              <input type="date" className="form-input" placeholder="Return date" />
              <button type="submit" className="form-button">Book now</button>
            </form>
          </div>
        </div>
      </section>

      {/* FEATURES / NUMBERS SECTION */}
      <section className="features">
        <div className="container-hm">
          <div className="feature-item">
            <img src="./accets/feature1.svg" alt="Availability" className="feature-icon" />
            <h3 className="feature-title">Availability</h3>
            <p className="feature-desc">Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
          </div>
          <div className="feature-item">
            <img src="./accets/feature2.svg" alt="Comfort" className="feature-icon" />
            <h3 className="feature-title">Comfort</h3>
            <p className="feature-desc">Gravida auctor fermentum morbi vulputate ac egestas orci etium convallis</p>
          </div>
          <div className="feature-item">
            <img src="./accets/feature3.svg" alt="Savings" className="feature-icon" />
            <h3 className="feature-title">Savings</h3>
            <p className="feature-desc">Pretium convallis id diam sed commodo vestibulum lobortis volutpat</p>
          </div>
        </div>
      </section>

      {/* CAR GRID SECTION */}
      <section className="car-grid">
        <div className="container-hm">
          <div className="section-header">
            <h2 className="section-title">Choose the car that suits you</h2>
            <a href="#" className="view-all">View All →</a>
          </div>
          <div className="cars-container">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="car-card">
                <img src="./accets/car-placeholder.png" alt="Car" className="car-image" />
                <div className="car-info">
                  <div className="car-brand-model">
                    <h3 className="car-brand">Mercedes</h3>
                    <span className="car-model">Sedan</span>
                  </div>
                  <div className="car-price">
                    <span className="price-value">$25</span>
                    <span className="price-period">per day</span>
                  </div>
                  <div className="car-features">
                    <span className="feature-item">Automat</span>
                    <span className="feature-item">PB 95</span>
                    <span className="feature-item">Air Conditioner</span>
                  </div>
                  <button className="car-button">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS IN NUMBERS SECTION */}
      <section className="facts">
        <div className="container-hm">
          <h2 className="facts-title">Facts In Numbers</h2>
          <p className="facts-subtitle">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. 
            Diam tincidunt tincidunt erat at semper fermentum
          </p>
          <div className="facts-grid">
            <div className="fact-item">
              <div className="fact-icon-bg">🚗</div>
              <div className="fact-value">540+</div>
              <div className="fact-label">Cars</div>
            </div>
            <div className="fact-item">
              <div className="fact-icon-bg">👥</div>
              <div className="fact-value">20k+</div>
              <div className="fact-label">Customers</div>
            </div>
            <div className="fact-item">
              <div className="fact-icon-bg">📅</div>
              <div className="fact-value">25+</div>
              <div className="fact-label">Years</div>
            </div>
            <div className="fact-item">
              <div className="fact-icon-bg">🏁</div>
              <div className="fact-value">20m+</div>
              <div className="fact-label">Miles</div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE APP PROMO SECTION */}
      <section className="app-promo">
        <div className="container-hm">
          <div className="app-content">
            <h2 className="app-title">Download mobile app</h2>
            <p className="app-desc">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. 
              Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.
            </p>
            <div className="app-buttons">
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
          <div className="app-phones">
            <img src="./accets/phone1.png" alt="Phone 1" className="phone phone1" />
            <img src="./accets/phone2.png" alt="Phone 2" className="phone phone2" />
          </div>
        </div>
      </section>

      {/* SEARCH BANNER SECTION */}
      <section className="search-banner">
        <div className="container-hm">
          <div className="search-content">
            <h2 className="search-title">Enjoy every mile with adorable companionship.</h2>
            <p className="search-desc">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. 
              Diam tincidunt tincidunt erat
            </p>
            <div className="search-form">
              <input type="text" className="search-input" placeholder="City" />
              <button className="search-button">Search</button>
            </div>
          </div>
          <div className="search-car">
            <img src="./accets/car-front.png" alt="Car" className="car-front" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;