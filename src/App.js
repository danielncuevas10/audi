import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Audi from './pages/Audi';


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/audi/" element={<Audi />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>  
      <Footer />
    </Router>
  )
}

export default App;