import React from 'react';
import './Audi.css';
import about1 from '../assets/images/about1.png';
import engine from '../assets/images/engine.png';
import interior from '../assets/images/interior.png';
import etron from '../assets/images/etron.png';
import highway from '../assets/images/highway.png';


const Audi = () => {
  return <div>
  
            <div className="landing-audi">
                <img src={etron} alt="The landing page car" className="landing-img" />
                <h1>You have to live it To believe it</h1>
            </div>
            <div className="who-are">
                <h1>Our roots define us</h1>
                <div className="this-is-us">
                    <img src={engine} alt="audi-engine" />
                    <img src={interior} alt="audi-interiors" />
                    
                    
                </div>
                <p className="the-text">"We believe that any owner of our cars should be the happiest person in the world, while maintaining class, fancy and a comfy environment."</p>
            </div>
            <div className="mission">
                <img src={about1} alt="The etron is here"/>
                <h1 className="the-mission">Our Mission</h1>
                <p className="mission-description">"To lead the automotive industry by providing innovative electric and combustion engine vehicles that combine performance, sustainability, and advanced technology, driving a cleaner, more efficient future."</p>
            </div>
            <div className="vision">
                <img src={highway} alt="The etron is here"/>
                <h1 className="the-vission">Our Mission</h1>
                <p className="vission-description">"Inspiring every journey while driving toward a sustainable future."</p>
            </div>
        </div>
};

export default Audi; 
