import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, description, id } = props.service;
    console.log(name)
    return (
        <div>
            <Col className="service text-center">
                <Card>
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                    <div className="text-center mb-4">
                        <Link to={`/details/${id}`}><button className="detail-btn bg-primary border-0  text-light w-25 justify-center "> Details </button></Link></div>
                </Card>
            </Col>
        </div>
    );
};

export default Service;