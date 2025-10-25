import React from 'react';
import './home.css';

function Home() {
  return (
    <main className="home">
      <div className="hero">
        <div className="container">
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
      </div>
    </main>
  );
}

export default Home;