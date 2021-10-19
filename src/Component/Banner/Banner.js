import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner">
            {/* <div className="banner">
                <h2 >We Protect Your precious Smile</h2>
            </div> */}
            


            <Carousel>
                <Carousel.Item>
                    <img  className="d-block w-100 banner-img img-fluid" src="https://i.ibb.co/k498kZp/dentalia-slider-1920x600-restorative-dentistry.jpg" alt="First slide"/>
                    <Carousel.Caption>
                    <h3>Everlasting Smile</h3>
                    <p>We work to create natural glow for your teeth.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-img img-fluid"
                    src="https://i.ibb.co/f43zNJy/dentalia-slider-1920x600-oral-health-consultation.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>An Enjoyable Experience</h3>
                    <p>We create advanced individual treatement only for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-img img-fluid"
                    src="https://i.ibb.co/Jd2NR8L/dentalia-slider-1920x600-cosmetic-dentistry.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Brighten Your Smile</h3>
                    <p>Advanced cosmetic dentistry for your individual need.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;