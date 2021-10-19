import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
      <div className="contact">
        <h2 className="fw-bold pt-5">Contact Us</h2>
        <h4>Request an Appointment</h4>
            <Form className="contact-form w-50 m-auto pt-4" >

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Control type="text" placeholder="Enter your first name" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Control type="text" placeholder="Enter your last name" />
      </Form.Group>
          </Row>
          <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Control placeholder="1234 Main St ( your address )" />
          </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} placeholder="ask a question" />
  </Form.Group>




  <Button variant="secondary" className="send-btn fw-bold" type="submit">
    Send
  </Button>
</Form>
        </div>
    );
};

export default Contact;