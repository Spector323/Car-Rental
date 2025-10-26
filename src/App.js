import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Vehicles from './pages/Vehicles/Vehicles';

function App() {
  return (

    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
