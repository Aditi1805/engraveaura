import React from "react";
import { Link } from 'react-router-dom';
import giftss from "../images/giftss.jpg";

function About() {
    return (
        <div className="container mt-md-2 mb-md-4 mt-sm-2 mb-sm-2">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="main-heading">About Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 col-md-12 mb-4 mb-lg-0"> {/* Added margin-bottom for medium screens and above */}
                    <img src={giftss} className="w-100 border-bottom aboutus-photo" alt="..." />
                </div>

                <div className="col-lg-7 col-md-12 text-center">
                    <h1 className="about-text-new">Gifts <span>For Every</span> <span>Occasion</span></h1>
                    <br />

                    <div className="para-card">
                        <p className="about-para">
                            Welcome to <span className="aboutus-name">Engraveaura,</span> your one-stop destination for all things personalized and unique. We take pride in offering a wide variety of custom gifts, home decor designs, printing services for t-shirts and hoodies, wedding signs, and much more.
                        </p>
                        <p className="about-para">
                            At Engraveaura, we believe that every gift should be as special as the person receiving it. That's why we offer a diverse range of products that can be personalized to your liking. Whether you're looking for a custom mug to brighten up your morning coffee, a personalized home decor piece to add a personal touch to your living space, or a custom-printed t-shirt or hoodie to make a statement, we have you covered.
                        </p>
                        <p className="about-para">
                            Our team of talented designers and artisans are dedicated to creating high-quality products that exceed your expectations. We use only the finest materials and printing techniques to ensure that your custom items are not only beautiful but also long-lasting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
