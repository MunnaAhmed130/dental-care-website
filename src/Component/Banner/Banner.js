import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            {/* <div className="banner">
                <h2 >We Protect Your precious Smile</h2>
            </div> */}
            <Carousel>
                <Carousel.Item>
                    <img  className="d-block w-100 banner-img img-fluid" src="https://i.ibb.co/4tm5KbB/slide-1.jpg" alt="First slide"/>
                    <Carousel.Caption>
                    <h3></h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-img img-fluid"
                    src="https://i.ibb.co/zStbD6T/slide-2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 banner-img img-fluid"
                    src="https://i.ibb.co/BNMZxLb/slider-layer-dentist.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;