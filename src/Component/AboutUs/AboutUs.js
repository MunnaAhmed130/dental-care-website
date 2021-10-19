import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <section className="about_bg_img">
                <div className="">
                    <h3 className="bg_info d-inline-block mt-5 pt-5">Quality Dental Care for full family</h3>
                </div>
            </section>

            <Container className="row1" >
              <h3 className="py-4 fs-1">About Our Clinic</h3>
                <Row className="d-flex about-row">
                    <Col sm="6" >
                    <img className="img-fluid" src="https://i.ibb.co/2svVC30/about-01.jpg" alt="" />
                    </Col>
                    <Col sm="6">
                        <div  className="text-center pt-5 clinic-info">
                            <p className=" px-5 pt-5 ">For nearly 16 years, our financial district dentist, Adam Smith, DDS and the dental team at DentCo Dental Clinic have provided cosmetic dentistry as well as family dentistry services. Dr. Adam understands that patients have a variety of practices in the area to choose from.</p>
                            <p className="px-5 ">It is our mission to exceed expectations by providing exceptional dental care to our patients and at the same time, building relationships of trust with them.</p>
                        </div>
                    </Col>
              </Row>
            </Container>
            <section className="about-banner">
                <div className="pt-5">
                    <h3 className="fs-1 fw-bold pt-5">Get the Smile You Have Always Wanted!</h3>
                    <p className="pb-5 fs-5">We strive to provide the highest quality dental treatment at reasonable fees</p>
                </div>
            </section>
            <Container>
                <Row className="d-flex justify-content-center align-items-center about-row">
                        <Col sm="6">
                            <div  className="text-center pt-5 clinic-info">
                                <p className="">We're always accepting new patients!Creating a beautiful smile can enhance a persons confidence and overall appearance.Below are some of the examples that you can be viewed. We believe in providing the best possible care to all our existing patients and welcome new patients to sample the service we have to offer.</p>
                            </div>
                    </Col>
                    <Col sm="6" >
                        <img className="img-fluid mb-5"  src="https://i.ibb.co/0tzMmR1/banner-left.jpg" alt="" />
                        </Col>
                  </Row>
            </Container>

            
        </div>
    );
};

export default AboutUs;