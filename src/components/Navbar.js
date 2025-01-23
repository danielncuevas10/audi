import React from 'react';
import { Link } from 'react-router-dom'; // To navigate between pages
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav>
       <div class="navi">
            <ul>
            <img src={logo} alt="Audi Logo" className="logo-audi" />
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
            
        </div>     
    </nav>
  );
};

export default Navbar;
