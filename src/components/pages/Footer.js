import React from "react";
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import "./header.css"; 




function Footer(){

return(


    <>

    <div className="container-fluid bck-footer">

  
    <div className="container footer-cont mb-4">


   
    <footer className="footer mt-auto py-3 bg-color-footer">
          <div className="container bg-color-footer ">
            <div className="row">
              <div className="col-md-3">
                <div className="contact-info">
                <h5 className="footer-text new-footer ">Contact Us</h5>
                <p className="footer-text contact-new">Phone: +1 64646</p>
                <p className="footer-text contact-new">Phone: +1 54641</p>
              
                <p className="footer-text contact-new">Email:  sdsfsf8@gmail.com</p>
                 
                <p className="footer-text contact-new">Email:  sdfsdra@gmail.com</p>
                </div>
              </div>
              <div className="col-md-3">
                <h5 className="footer-text new-footer">Categories</h5>
                <ul class="list-group footer-list">
  <li class="list-group-item footer-list">Wedding Signs</li>
  <li class="list-group-item footer-list">Personalized Gifts</li>
  <li class="list-group-item footer-list">Birthday Return</li>
  <li class="list-group-item footer-list">Kids Favour</li>
  <li class="list-group-item footer-list">Baby Shower</li>
  <li class="list-group-item footer-list">Corporate Orders</li>
  <li class="list-group-item footer-list">Home Decor</li>
  <li class="list-group-item footer-list">Wedding Signs</li>
  <li class="list-group-item footer-list">Welcome Signs</li>

</ul>
              </div>
              <div className="col-md-3">
                <h5 className="footer-text new-footer">Useful Links</h5>
                <ul class="list-group footer-list ">
  <li class="list-group-item footer-list">Home</li>
  <li class="list-group-item footer-list">About Us</li>
  <li class="list-group-item footer-list">Products</li>
  <li class="list-group-item footer-list">Contact Us</li>
  <li class="list-group-item footer-list">Jewellary</li>
  <li class="list-group-item footer-list">Accessroies</li>
  <li class="list-group-item footer-list">Clothing</li>

</ul>
              </div>
              <div className="col-md-3">
                <h5 className=" footer-text new-footer">Follow Us</h5>
                <p className="">
                  <Link className="ny ft-social" to="https://www.facebook.com/profile.php?id=100077890857740&mibextid=dGKdO6"><FontAwesomeIcon icon={faFacebook} /></Link>
                  <Link className="ny ft-social"  to="https://www.instagram.com/engraveaura.ca?igsh=NGxrcGpubjA3Y2Zo"><FontAwesomeIcon icon={faInstagram} /></Link>
                  <Link className="ny ft-social"  to="https://www.instagram.com/gifts_n_giggles.ca?igsh=d2d5YXlmcm9xMGhw"><FontAwesomeIcon icon={faInstagram} /></Link>
                  <Link className="ny ft-social" to="https://www.tiktok.com/@engraveaura.ca?_t=8kl3jFn2CGL&_r=1">  <FontAwesomeIcon icon={faTiktok} /></Link>
                  <Link className="ny ft-social" to="https://www.tiktok.com/@gifts_n_giggles18?_t=8kl3wGSDWbu&_r=1">  <FontAwesomeIcon icon={faTiktok} /></Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
        </div>
    </div>
  
    </>
);


}

export default Footer;

