import React, { useState, useEffect } from 'react';
import './vehicles.css';

function Vehicles() {
  const initialCars = [
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

  const getCarsFromStorage = () => {
    try {
      const savedCars = localStorage.getItem('vehiclesData');
      if (savedCars) {
        return JSON.parse(savedCars);
      }
    } catch (error) {
      console.error('Error loading cars from localStorage:', error);
    }
    return initialCars;
  };

  const saveCarsToStorage = (cars) => {
    try {
      localStorage.setItem('vehiclesData', JSON.stringify(cars));
    } catch (error) {
      console.error('Error saving cars to localStorage:', error);
    }
  };

  const [allCars, setAllCars] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All vehicles');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    price: '',
    type: 'Sedan',
    transmission: 'Automat',
    fuel: 'PB 95',
    ac: true,
    image: null,
    imagePreview: null
  });

  useEffect(() => {
    const savedCars = getCarsFromStorage();
    setAllCars(savedCars);
  }, []);

  useEffect(() => {
    if (allCars.length > 0) {
      saveCarsToStorage(allCars);
    }
  }, [allCars]);

  const filteredCars = activeFilter === 'All vehicles'
    ? allCars
    : allCars.filter(car => car.type === activeFilter);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewCar(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Пожалуйста, выберите файл изображения');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Размер файла не должен превышать 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setNewCar(prev => ({
          ...prev,
          image: file,
          imagePreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCar = (e) => {
    e.preventDefault();

    if (!newCar.brand || !newCar.model || !newCar.price) {
      alert('Пожалуйста, заполните обязательные поля: марка, модель и цена');
      return;
    }

    const carToAdd = {
      id: Date.now(),
      brand: newCar.brand,
      model: newCar.model,
      price: Number(newCar.price),
      type: newCar.type,
      transmission: newCar.transmission,
      fuel: newCar.fuel,
      ac: newCar.ac,
      image: newCar.imagePreview || "./accets/car-placeholder.png"
    };

    const updatedCars = [...allCars, carToAdd];
    setAllCars(updatedCars);

    setNewCar({
      brand: '',
      model: '',
      price: '',
      type: 'Sedan',
      transmission: 'Automat',
      fuel: 'PB 95',
      ac: true,
      image: null,
      imagePreview: null
    });

    const fileInput = document.getElementById('car-image');
    if (fileInput) fileInput.value = '';

    setShowAddForm(false);
  };

  const handleDeleteCar = (id) => {
    const updatedCars = allCars.filter(car => car.id !== id);
    setAllCars(updatedCars);
  };

  const handleResetData = () => {
    if (window.confirm('Вы уверены, что хотите сбросить все данные к исходным? Это удалит все добавленные вами автомобили.')) {
      localStorage.removeItem('vehiclesData');
      setAllCars(initialCars);
    }
  };

  return (
    <main className="vehicles">
      <div className="container-vh">
        <div className="vehicles-header">
          <div className="header-left">
            <h1 className="vehicles-title">Select a vehicle group</h1>
          </div>
          <div className="btn-fr">
            <button className="add-car-btn" onClick={() => setShowAddForm(true)} > + Add New Car </button>
            <button className="reset-btn" onClick={handleResetData} title="Reset to initial data">Reset</button>
          </div>
        </div>

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

        {showAddForm && (
          <div className="add-car-form-overlay">
            <div className="add-car-form">
              <div className="form-header">
                <h3>Add New Car</h3>
                <button
                  className="close-btn"
                  onClick={() => setShowAddForm(false)}
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleAddCar}>
                <div className="form-section">
                  <h4>Car Information</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Brand *</label>
                      <input
                        type="text"
                        name="brand"
                        placeholder="Mercedes, BMW, Toyota..."
                        value={newCar.brand}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Model *</label>
                      <input
                        type="text"
                        name="model"
                        placeholder="Sedan, 3 Series, Hilux..."
                        value={newCar.model}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Price per day ($) *</label>
                      <input
                        type="number"
                        name="price"
                        placeholder="25"
                        value={newCar.price}
                        onChange={handleInputChange}
                        className="form-input"
                        min="1"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Vehicle Type</label>
                      <select
                        name="type"
                        value={newCar.type}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="Sedan">Sedan</option>
                        <option value="Cabriolet">Cabriolet</option>
                        <option value="Pickup">Pickup</option>
                        <option value="Suv">SUV</option>
                        <option value="Minivan">Minivan</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Specifications</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Transmission</label>
                      <select
                        name="transmission"
                        value={newCar.transmission}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="Automat">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Fuel Type</label>
                      <select
                        name="fuel"
                        value={newCar.fuel}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="PB 95">PB 95</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="ac"
                        checked={newCar.ac}
                        onChange={handleInputChange}
                        className="checkbox-input"
                      />
                      <span className="checkmark"></span>
                      Air Conditioner
                    </label>
                  </div>
                </div>

                <div className="form-section">
                  <h4>Car Image</h4>
                  <div className="image-upload-area">
                    <input
                      type="file"
                      id="car-image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="image-input"
                    />
                    <label htmlFor="car-image" className="image-upload-label">
                      {newCar.imagePreview ? (
                        <div className="image-preview">
                          <img src={newCar.imagePreview} alt="Preview" />
                          <span>Change Image</span>
                        </div>
                      ) : (
                        <div className="image-placeholder">
                          <div className="upload-icon">📷</div>
                          <span>Click to upload car image</span>
                          <small>PNG, JPG up to 5MB</small>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    Add Car
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {filteredCars.length > 0 ? (
          <div className="cars-grid">
            {filteredCars.map((car) => (
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
                  <button
                    className="delete-car-btn"
                    onClick={() => handleDeleteCar(car.id)}
                    title="Delete car"
                  >
                    ×
                  </button>
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