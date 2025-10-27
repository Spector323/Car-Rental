
import React, { useState } from 'react';
import './vehicles.css';

function Vehicles() {
  const allCars = [
    { id: 1, brand: "Mercedes", model: "Sedan", price: 25, type: "Sedan", transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/mercedes-3.png" },
    { id: 2, brand: "BMW", model: "3 Series", price: 30, type: "Sedan", transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/bmw.png" },
    { id: 3, brand: "Audi", model: "A4", price: 28, type: "Sedan", transmission: "Manual", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/mercedes-2.png" },
    { id: 4, brand: "Porsche", model: "911", price: 80, type: "Cabriolet", transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/porsche.png" },
    { id: 5, brand: "Mercedes", model: "SL", price: 85, type: "Cabriolet", transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/toyota-2.png" },
    { id: 6, brand: "Ford", model: "Ranger", price: 45, type: "Pickup", transmission: "Manual", fuel: "Diesel", ac: true, image: "./accets/vehicles/avto/porsche-bl.png" },
    { id: 7, brand: "Toyota", model: "Hilux", price: 50, type: "Pickup", transmission: "Automat", fuel: "Diesel", ac: true, image: "./accets/vehicles/avto/mercedes-4.png" },
    { id: 8, brand: "Porsche", model: "Cayenne", price: 70, type: "Suv", transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/toyota.png" },
    { id: 9, brand: "Jeep", model: "Wrangler", price: 60, type: "Suv", transmission: "Manual", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/maybach.png" },
    { id: 10, brand: "Toyota", model: "Land Cruiser", price: 65, type: "Suv", transmission: "Automat", fuel: "Diesel", ac: true, image: "./accets/vehicles/avto/toyota.png" },
    { id: 11, brand: "Mercedes", model: "V-Class", price: 55, type: "Minivan", transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/mercedes-1.png" },
    { id: 12, brand: "Toyota", model: "Alphard", price: 60, type: "Minivan", transmission: "Automat", fuel: "PB 95", ac: true, image: "./accets/vehicles/avto/toyota-2.png" },
  ];

  const [activeFilter, setActiveFilter] = useState('All vehicles');

  const filteredCars = activeFilter === 'All vehicles'
    ? allCars
    : allCars.filter(car => car.type === activeFilter);

  return (
    <main className="vehicles">
      <div className="container-vh">
        <h1 className="vehicles-title">Select a vehicle group</h1>

        <div className="filters">
          {['All vehicles', 'Sedan', 'Cabriolet', 'Pickup', 'Suv', 'Minivan'].map((filter) => (
            <button
              key={filter}
              className={`filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredCars.length > 0 ? (
          <div className="cars-grid">
            {filteredCars.map((car, index) => (
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
        ) : (
          <div className="no-cars">
            <p>No vehicles found for this category.</p>
          </div>
        )}

        <div className="brands">
          <img src="./accets/vehicles/logo/toyota.png" alt="Toyota" className="brand-logo" />
          <img src="./accets/vehicles/logo/ford.png" alt="Ford" className="brand-logo" />
          <img src="./accets/vehicles/logo/mercedes.png" alt="Mercedes" className="brand-logo" />
          <img src="./accets/vehicles/logo/jeep.png" alt="Jeep" className="brand-logo" />
          <img src="./accets/vehicles/logo/bmw.png" alt="BMW" className="brand-logo" />
          <img src="./accets/vehicles/logo/audi.png" alt="Audi" className="brand-logo" />
        </div>
      </div>
    </main>
  );
}

export default Vehicles;