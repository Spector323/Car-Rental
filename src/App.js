import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Vehicles from './pages/Vehicles/Vehicles';
import Details from './pages/Details/Details';
import About from './pages/About/About';

function App() {
  return (

    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
