import React from 'react';
import './About.css';
import about1 from '../assets/images/about1.png';

const About = () => {
  return <div className="landing-audi">
            <img src={about1} alt="The landing page car" className="landing-img" />
            <h1>Boldly evolved<br></br> Unmistakably Audi</h1>
        </div>;
};

export default About; 
