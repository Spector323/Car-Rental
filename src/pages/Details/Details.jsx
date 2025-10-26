import React, { useState } from 'react';
import './details.css';

function Details() {
  const currentCar = {
    id: 1,
    brand: "BMW",
    model: "Sedan",
    price: 25,
    image: "./accets/details/car.png",
    specs: [
      { icon: "./accets/vehicles/p.png", title: "Gear Box", value: "Automat" },
      { icon: "./accets/vehicles/bn.png", title: "Fuel", value: "Petrol" },
      { icon: "./accets/vehicles/dr.png", title: "Doors", value: "2" },
      { icon: "./accets/vehicles/kr.png", title: "Air Conditioner", value: "Yes" },
      { icon: "./accets/vehicles/st.png", title: "Seats", value: "5" },
      { icon: "./accets/vehicles/d.png", title: "Distance", value: "500" }
    ],
    equipment: [
      { icon: "./accets/details/like.png", name: "ABS" },
      { icon: "./accets/details/like.png", name: "Air Bags" },
      { icon: "./accets/details/like.png", name: "Cruise Control" },
      { icon: "./accets/details/like.png", name: "ABS" },
      { icon: "./accets/details/like.png", name: "Air Bags" },
      { icon: "./accets/details/like.png", name: "Air Conditioner" }
    ],
    thumbnails: [
      "./accets/details/img.png",
      "./accets/details/img-1.png",
      "./accets/details/img-2.png"
    ]
  };

  const otherCars = [
    { id: 2, brand: "Mercedes", model: "Sedan", price: 25, image: "./accets/vehicles/avto/mercedes-1.png" },
    { id: 3, brand: "Mercedes", model: "Sport", price: 50, image: "./accets/vehicles/avto/mercedes-2.png" },
    { id: 4, brand: "Mercedes", model: "Sedan", price: 45, image: "./accets/vehicles/avto/mercedes-3.png" },
    { id: 5, brand: "Porsche", model: "SUV", price: 40, image: "./accets/vehicles/avto/porsche.png" },
    { id: 6, brand: "Toyota", model: "Sedan", price: 35, image: "./accets/vehicles/avto/toyota-2.png" },
    { id: 7, brand: "Porsche", model: "SUV", price: 50, image: "./accets/vehicles/avto/porsche-bl.png" },
  ];

  const [activeThumbnail, setActiveThumbnail] = useState(0);

  return (
    <main className="details">

      <div className="container-dt">
        <div className="cn-car">
          <div className="car-main">
            <div className="price-title"><b>{currentCar.brand}</b></div>
            <div className="price-tag">${currentCar.price}</div>

            <div className="car-image-wrapper">
              <img
                src={currentCar.image}
                alt={`${currentCar.brand} ${currentCar.model}`}
                className="car-main-img"
                onError={(e) => e.target.src = "./accets/car-placeholder.png"}
                onLoad={(e) => e.target.parentElement.classList.add('image-loaded')}
              />
            </div>
            <div className="thumbnails">
              {currentCar.thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === activeThumbnail ? 'active' : ''}`}
                  onClick={() => setActiveThumbnail(index)}
                >
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className="thumbnail-img" />
                </div>
              ))}

            </div>
          </div>

          <div className="car-specs">
            <div className="cn-spec-item">
              {currentCar.specs.map((spec, index) => (
                <div key={index} className="spec-item">
                  <img src={spec.icon} alt={spec.title} className="spec-icon" />
                  <div className="spec-content">
                    <span className="spec-title">{spec.title}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="rent-button">Rent a car</button>

            <div className="equipment">
              <h3 className="equipment-title">Car Equipment</h3>
              <div className="equipment-list">
                {currentCar.equipment.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <img src={item.icon} alt={item.name} className="equipment-icon" />
                    <span className="equipment-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="other-cars">
          <div className="section-header">
            <h2 className="other-cars-title">Other cars</h2>
            <a href="/vehicles" className="view-all">View All →</a>
          </div>
          <div className="cars-grid">
            {otherCars.map((car, index) => (
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
                      <img src="./accets/vehicles/p.png" alt="Gear" /> Automat
                    </span>
                    <span className="spec">
                      <img src="./accets/vehicles/bn.png" alt="Fuel" /> PB 95
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
        </div>
      </div>
    </main>
  );
}

export default Details;