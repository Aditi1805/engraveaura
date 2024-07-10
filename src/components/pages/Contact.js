import React from "react";
import { Link } from "react-router-dom";
// import img from "../images/img.jpg";
import woman from "../images/woman.png";
// import telephoneminus from "../images/telephoneminus.png";
import {
  faFacebook,
  faTiktok,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <>
      <div className="container mt-4 mb-4 contact-height">
        <div className="row">
          <div className="col-md-12">
            {/* <img
              src={img}
              className="w-100 border-bottom contactimg"
              alt="..."
            /> */}
            <div className=" contact-txt  text-center">
              <h1 className="contactus-text ">Contact Us</h1>
              <p className="contactus-para">Have a gift in Mind ?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-two">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="card-design whole-contact">
              <h5 className="footer-text new-footer">
                Questions or want to place an order?
              </h5>
              <p className="footer-text">
              Phone:46465
              </p>
              <p className="footer-text">
              Phone: 5454757
              </p>
              <p className="footer-text">
               Email: hello@gmail.com
              </p>
              <p className="footer-text">
               Email: hello@gmail.com
              </p>
           
              <h5 className=" footer-text follow new-footer">Follow Us</h5>
              <p className="">
              <Link className="ny ft-social" to="https://www.facebook.com/profile.php?id=100077890857740&mibextid=dGKdO6"><FontAwesomeIcon icon={faFacebook} /></Link>
                  <Link className="ny ft-social"  to="https://www.instagram.com/engraveaura.ca?igsh=NGxrcGpubjA3Y2Zo"><FontAwesomeIcon icon={faInstagram} /></Link>
                  <Link className="ny ft-social"  to="https://www.instagram.com/gifts_n_giggles.ca?igsh=d2d5YXlmcm9xMGhw"><FontAwesomeIcon icon={faInstagram} /></Link>
                  <Link className="ny ft-social" to="https://www.tiktok.com/@engraveaura.ca?_t=8kl3jFn2CGL&_r=1">  <FontAwesomeIcon icon={faTiktok} /></Link>
                  <Link className="ny ft-social" to="https://www.tiktok.com/@gifts_n_giggles18?_t=8kl3wGSDWbu&_r=1">  <FontAwesomeIcon icon={faTiktok} /></Link>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card-design">
              <img src={woman} className="w-100 " alt="..." />
              <div className=" contact-txt position-absolute start-50 translate-middle text-center">
       
           
            </div>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>

    
    </>
  );
}
export default Contact;
