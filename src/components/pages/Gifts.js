import React from "react";
import { Link } from 'react-router-dom';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons'; // Import faGift from free-solid-svg-icons


import arrow from '../images/arrow.png';

function Gifts() {
  return (
    <div className="card left-hero">
      <div className="card-body">
        <h6 className="card-title hero-title">SURPRISE SOMEONE WITH A</h6>
        <h1 className="card-subtitle mb-2 text-body-secondary hero-subtitle">Personalized <span className="lname">Gifts</span> made with Love and 
creativity</h1>
        <p className="card-text hero-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="exp-arrow">

        <Link className="explore-more " to="/" role="button">Explore more  </Link><img src={arrow} className="d-block   " alt="..."/> 

        </div>
  

        <div className="container mt-4 mb-4">

          <h3 className="hero-services">OUR SERVICES</h3>
          <div className="row">
            <div className="col-md-4">
              <ul className="list-unstyled hero-list">
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> WEDDING SIGN
                </li>
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> PERSINALISED GIFTS
                </li>
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> BIRTHDAY RETURN 
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled hero-list">
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift}  className="icon-hero"/> KIDS GIFTS
                </li>
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> BABY SHOWER
                </li>
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> COPORATE ORDERS
                </li>
              </ul>
            </div>
            <div className="col-md-4 hero-list">
              <ul className="list-unstyled">
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> HOME DECOR
                </li>
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> WELCOME SIGNS
                </li>
                <li className="services-menu">
                  <FontAwesomeIcon icon={faGift} className="icon-hero" /> JEWELLARY
                </li>
              </ul>
            </div>
          </div>


       
        </div>
      </div>
    </div>
  );
}

export default Gifts;
