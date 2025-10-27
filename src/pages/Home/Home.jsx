// src/pages/Home.jsx
import React from 'react';
import './home.css';

function Home() {
    const cars = [
    { id: 1, brand: "Mercedes", model: "Sedan", price: 25, transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/mercedes-3.png" },
    { id: 2, brand: "BMW", model: "3 Series", price: 30, transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/bmw.png" },
    { id: 3, brand: "Audi", model: "A4", price: 28, transmission: "Manual", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/mercedes-2.png" },
    { id: 4, brand: "Porsche", model: "911", price: 80, transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/porsche.png" },
    { id: 5, brand: "Mercedes", model: "SL", price: 85, transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/toyota-2.png" },
    { id: 6, brand: "Ford", model: "Ranger", price: 45, transmission: "Manual", fuel: "Diesel", ac: true, image: "./accets/vehicles/avto/porsche-bl.png" },
  ];
  return (
    <main className="home">
      <section className="hero">
        <div className="container-hero">
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

      <section className="features">
        <div className="container-hm">
          <div className="feature-text">
            <img src="./accets/home/gl.png" alt="Availability" className="feature-icon" />
            <h3 className="feature-title">Availability</h3>
            <p className="feature-desc">Diam tincidunt tincidunt erat at semper <br />
              fermentum. Id ultricies quis</p>
          </div>
          <div className="feature-text">
            <img src="./accets/home/ms.png" alt="Comfort" className="feature-icon" />
            <h3 className="feature-title">Comfort</h3>
            <p className="feature-desc">Gravida auctor fermentum morbi vulputate <br />
              ac egestas orci etium convallis</p>
          </div>
          <div className="feature-text">
            <img src="./accets/home/dn.png" alt="Savings" className="feature-icon" />
            <h3 className="feature-title">Savings</h3>
            <p className="feature-desc">Pretium convallis id diam sed commodo <br />
              vestibulum lobortis volutpat</p>
          </div>
        </div>
      </section>

      <section className="car-grid">
          <div className="section-header">
            <h2 className="section-title">Choose the car that suits you</h2>
            <a href="/vehicles" className="view-all">View All →</a>
          </div>
          <div className="cars-grid">
            {cars.map((car, index) => (
              <div key={car.id} className="car-card">
                <div className="car-image-wrapper">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="car-img"
                    onError={(e) => {
                      e.target.src = "./accets/car-placeholder.png";
                      e.target.parentElement.classList.add('image-error');
                    }}
                    onLoad={(e) => {
                      e.target.parentElement.classList.add('image-loaded');
                    }}
                  />
                </div>
                <div className="car-details">
                  <div className="car-header">
                    <h3 className="car-brand">{car.brand}</h3>
                    <span className="car-model">{car.model}</span>
                  </div>
                  <div className="car-price">
                    <span className="price-num">${car.price}</span>
                    <span className="price-unit">per day</span>
                  </div>
                  <div className="car-specs">
                    <span className="spec">
                      <img src="./accets/vehicles/p.png" alt="Gear" /> {car.transmission}
                    </span>
                    <span className="spec">
                      <img src="./accets/vehicles/bn.png" alt="Fuel" /> {car.fuel}
                    </span>
                    <span className="spec">
                      <img src="./accets/vehicles/kr.png" alt="AC" /> Air Conditioner
                    </span>
                  </div>
                  <button className="btn-details">View Details</button>
                </div>
              </div>
            ))}
          </div>
      </section>

      <section className="facts">
        <h2 className="facts-title">Facts In Numbers</h2>
        <p className="facts-subtitle">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in.
          Diam tincidunt tincidunt erat at semper fermentum
        </p>
        <div className="facts-grid">
          <div className="fact-item">
            <div className="fact-icon-bg">
              <img src="./accets/home/car.png" alt="" />

            </div>
            <div>
              <div className="fact-value">540+</div>
              <div className="fact-label">Cars</div>
            </div>
          </div>
          <div className="fact-item">
            <div className="fact-icon-bg">
              <img src="./accets/home/love.png" alt="" />
            </div>
            <div>
              <div className="fact-value">20k+</div>
              <div className="fact-label">Customers</div>
            </div>
          </div>
          <div className="fact-item">
            <div className="fact-icon-bg">
              <img src="./accets/home/cal.png" alt="" />
            </div>
            <div>
              <div className="fact-value">25+</div>
              <div className="fact-label">Years</div>
            </div>
          </div>
          <div className="fact-item">
            <div className="fact-icon-bg">
              <img src="./accets/home/speed.png" alt="" />
            </div>
            <div>
              <div className="fact-value">20m+</div>
              <div className="fact-label">Miles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-promo">
          <div className="app-content">
            <h2 className="app-title">Download <br />
            mobile app</h2>
            <p className="app-desc">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus <br />
              turpis nibh placerat massa.
              Fermentum urna ut at et in. Turpis <br />
              aliquet cras hendrerit enim condimentum.
            </p>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img src="./accets/footer/apple.png" alt="App Store" />
                <span>Download on the App Store</span>
              </a>
              <a href="#" className="app-button">
                <img src="./accets/footer/googleplay.png" alt="Google Play" />
                <span>GET IT ON Google Play</span>
              </a>
            </div>
          </div>
          <div className="app-phones">
            <img src="./accets/home/tel.png" alt="Phone 1" className="phone phone1" />
            <img src="./accets/home/tel.png" alt="Phone 2" className="phone phone2" />
          </div>
      </section>

      <section className="search-banner">
        <div className="container-hm">
          <div className="search-content">
            <h2 className="search-title">Enjoy every mile with <br />
             adorable companionship.</h2>
            <p className="search-desc">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien <br />
               bibendum ullamcorper in.
              Diam tincidunt tincidunt erat
            </p>
            <div className="search-form">
              <input type="text" className="search-input" placeholder="City" />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;