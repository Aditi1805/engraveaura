import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container header-container">
      <nav className="navbar navbar-expand-lg bg-clr">
        <div className="container-fluid">
          <Link className="navbar-brand logo-new" to="/">Engraveaura</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 gap-in">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Categories
                </Link>
                <ul className="dropdown-menu gap-second">
                  <li><Link className="dropdown-item gap-in" to="/WeddingSign">Wedding Signs & gift hamber</Link></li>
                   <li><Link className="dropdown-item gap-in" to="/CustomGifts">Custom Gifts</Link></li>
              
                  <li><Link className="dropdown-item gap-in" to="/BirthdayReturns">Birthday Return Gifts</Link></li>
               
                  <li><Link className="dropdown-item gap-in" to="/BabyShower">Baby Shower Gifts</Link></li>
                
                  <li><Link className="dropdown-item gap-in" to="/HomeDecor">Home Decor</Link></li>
                 
                  <li><Link className="dropdown-item gap-in" to="/Clothing">Clothing</Link></li>
                  
                  <li><Link className="dropdown-item gap-in" to="/Jewellary">Jewellary</Link></li>
              
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allproducts">Shop All</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Custom Gifts
                </Link>
                <ul className="dropdown-menu gap-second">
                  <li><Link className="dropdown-item gap-in" to="/WeddingSign">Wedding Gifts & Sign</Link></li>
               
                 
                  <li><Link className="dropdown-item gap-in" to="/BirthdayReturns">Birthday Return Gifts</Link></li>
                 
                  <li><Link className="dropdown-item gap-in" to="/BabyShower">Baby Shower Gifts</Link></li>
                 
                
                
                  <li><Link className="dropdown-item gap-in" to="/Clothing">Clothing</Link></li>
                
                
                </ul>
              </li>
           
            
              <li className="nav-item">
                <Link className="nav-link" to="/HomeDecor">Home Decor</Link>
              </li>
         
                    
              <li className="nav-item">
                <Link className="nav-link" to="/Jewellary">Jewellary</Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
        
          
                
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Header;
