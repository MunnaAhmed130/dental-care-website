import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div></div>

            <Container >
              <h3 className="py-4 fs-1">About Our Clinic</h3>
                <Row className="d-flex about-row">
                    <Col >
                    <img src="https://i.ibb.co/2svVC30/about-01.jpg" alt="" />
                    </Col>
                    <Col className="align-middle">
                        <p className="align-middle px-5">For nearly 16 years, our financial district dentist, Adam Smith, DDS and the dental team at DentCo Dental Clinic have provided cosmetic dentistry as well as family dentistry services. Dr. Adam understands that patients have a variety of practices in the area to choose from.</p>
                        <p>It is our mission to exceed expectations by providing exceptional dental care to our patients and at the same time, building relationships of trust with them.</p>
                    </Col>
              </Row>
            </Container>
            <section className="about-banner">
                <h3 className="fs-1 fw-bold pt-5">Get the Smile You Have Always Wanted!</h3>
                <p className="pb-5">We strive to provide the highest quality dental treatment at reasonable fees</p>
            </section>
            
        </div>
    );
};

export default AboutUs;