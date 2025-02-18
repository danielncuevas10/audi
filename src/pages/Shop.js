import React from 'react';
import './Shop.css';
import about from '../assets/images/about.png';
import store from '../assets/images/store.png';
import vancouver from '../assets/images/vancouver.png';
import ny from '../assets/images/ny.png';
import london from '../assets/images/london.png';
import vienna from '../assets/images/vienna.png';

const videoUrl = "https://res.cloudinary.com/dtdp0qzmq/video/upload/v1739843083/b2ndf0xzobao5aemxkrp.mp4";

const Shop = () => {
  return (
        <div className="shop-container">
          <div className="landing-audi">
            <video  className="video" autoPlay muted loop>
            <source src={videoUrl} type="video/mp4"/>
          </video>
            <div className="the-title">
              <p>"We don't sell cars, we sell dreams"</p>
            </div>
            <div className="the-title2">
              <p>We deliver your Audi wherever you are.</p>
            </div>
          </div>
          <div className="second">
            <img src={store} className="store-background" alt="store background"/>
            <h2>Come and visit us</h2>
          </div>
          <div className="the-stores">
            <div className="stores">
              <div className="first-flex">
                  <div className="place vancouver">
                    <h1 className="city">Vancouver</h1>
                    <div className="the-description">
                      <p className="the-text">Downtown Audi Center</p>
                      <button type="button">This is it</button>
                      <img src={vancouver} className="the-picture" alt="this is the picture of the store"/>
                    </div>  
                  </div>
                  <div className="place new-york">
                    <h1 className="city">New York</h1>
                      <div className="the-description">
                        <p className="the-text">Downtown Audi Center</p>
                        <button type="button">This is it</button>
                        <img src={ny} className="the-picture" alt="this is the picture of the store"/>
                      </div> 
                    </div>
              </div> 
              <div className="first-flex">
                  <div className="place london">
                  <h1 className="city">London</h1>
                    <div className="the-description">
                      <p className="the-text">Downtown Audi Center</p>
                      <button type="button">This is it</button>
                      <img src={london} className="the-picture" alt="this is the picture of the store"/>
                    </div> 
                  </div>
                <div className="place vienna">
                <h1 className="city">Vienna</h1>
                  <div className="the-description">
                    <p className="the-text">Downtown Audi Center</p>
                    <button type="button">This is it</button>
                    <img src={vienna} className="the-picture" alt="this is the picture of the store"/>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
  )
};

export default Shop; 
