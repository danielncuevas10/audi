import React from 'react';
import './Home.css';
import landing from '../assets/images/landing.png';
import r8 from '../assets/images/r8.png';
import rsq8 from '../assets/images/rsq8.png';
import a4 from '../assets/images/a4.png';
import inside from '../assets/images/inside.png';
import carplay from '../assets/images/carplay.png';
import seats from '../assets/images/seats.png';
import forrest from '../assets/images/forrest.png';
import racing from '../assets/images/racing.png';
import roadtrip from '../assets/images/roadtrip.png';
import wheel from '../assets/images/wheel.png';
import beach from '../assets/images/beach.png';


function Home() {
    return (
        <div>
            <div className="landing-container">
                <img src={landing} alt="The landing page car" className="landing-img" />
                <div className="landing-text">
                    <h1>New <span style={{ color: 'black' }}>AUDI RQ5</span></h1>
                    <p>Experience the new e-tron family</p>
                        <div className="button-container">
                            <button className="btn">Discover e-tron</button>
                            <button className="btn1">Discover V8</button>
                        </div>
                </div>

            </div>
            <div className="audi-styles">
                <h2>Models for all the family</h2>
                    <ul id="cars">
                        <li><img src={r8} alt="The beautiful R8"/><p>Luxury gama</p></li>
                        <li><img src={rsq8} alt="The beautiful Q5 family"/><p>Family styles</p></li>
                        <li><img src={a4} alt="The beautiful R8"/><p>Sedan</p></li>
                    </ul>
            </div>
            <div className="experience">
                <div id="inside">
                    <img src={inside} alt="Audi inside"></img>
                        <div className="title-text">
                            <h2>The expression of Luxury</h2>
                            <p>Full of stylish elements that will make you feel something unique.</p>
                        </div>   
                </div>
                <div id="carplay">
                    <div className="title-text">
                        <h2>Impressive technology with a simple touch</h2>
                        <p>With carplay on your screen, you are full of gadgets that can get and help you everywhere you go.</p>
                    </div>  
                    <img src={carplay} alt="Audi inside"></img> 
                </div>
                <div id="comfort">
                    <img src={seats} alt="Audi inside"></img>
                        <div className="title-text">
                            <h2>Your comfort has never been more important</h2>
                            <p>Full of stylish elements that will make you feel something unique.</p>
                        </div>   
                </div>
            </div>
            <div className="inspired">
                <h1>GET INSPIRED</h1>
                <p id="sub">Your Audi is capable to go everywhere you want to go</p>
                    <div id="ideas">
                        <ul id="the-ideas">
                            <li>
                                <div className="audi-container">
                                <img src={forrest} alt="Audi inside"/><p className="image-text">Forrest Trails</p>
                                </div>
                            </li>
                            <li>
                                <div className="audi-container">
                                <img src={racing} alt="Audi inside"/><p className="image-text">Racing Adventures</p>
                                </div>
                            </li>
                            <li>
                                <div className="audi-container">
                                <img src={roadtrip} alt="Audi inside"/><p className="image-text">Family Roadtrips</p>
                                </div>
                            </li>
                            <li>
                                <div className="audi-container">
                                <img src={wheel} alt="Audi inside"/><p className="image-text">Maximum Comfort</p>
                                </div>
                            </li>
                            <li>
                                    <div className="audi-container">
                                    <img src={beach} alt="Audi inside"/><p className="image-text">Vacations</p>
                                    </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>   
    );
  };
  export default Home;
  