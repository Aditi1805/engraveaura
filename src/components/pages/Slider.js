import React, { useState, useEffect } from "react";
import img from '../images/img.jpg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import slideimg3 from '../images/Slides Images/img3.jpg';
import slideimg4 from '../images/Slides Images/img4.jpg';
import slideimg5 from '../images/Slides Images/img5.jpg';
import slideimg6 from '../images/Slides Images/img6.jpg';
import slideimg7 from '../images/Slides Images/img7.jpg';
import slideimg8 from '../images/Slides Images/img8.jpg';

import { Link } from 'react-router-dom';

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 9); // Assuming there are 9 slides
        }, 4000); // 4 seconds interval

        return () => clearInterval(interval);
    }, []);

    const slides = [
        { src: img, text: 'Some representative placeholder content for the first slide.' },
        { src: img1, text: 'Some representative placeholder content for the second slide.' },
        { src: img2, text: 'Some representative placeholder content for the third slide.' },
        { src: slideimg3, text: 'Some representative placeholder content for the fourth slide.' },
        { src: slideimg4, text: 'Some representative placeholder content for the fifth slide.' },
        { src: slideimg5, text: 'Some representative placeholder content for the sixth slide.' },
        { src: slideimg6, text: 'Some representative placeholder content for the seventh slide.' },
        { src: slideimg7, text: 'Some representative placeholder content for the eighth slide.' },
        { src: slideimg8, text: 'Some representative placeholder content for the ninth slide.' }
    ];

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === activeIndex ? 'active' : ''}
                            aria-current={index === activeIndex ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img src={slide.src} className="d-block img-hero-hyt" alt={`Slide ${index + 1}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>latest Trending</h5>
                                <h1>Custom Gifts</h1>
                                <p>{slide.text}</p>
                                <Link className="btn btn-primary btn-hero-all" to="/" role="button">Shop All</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Slider;
