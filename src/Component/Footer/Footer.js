import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faHome, faPhone, faSortNumericUpAlt } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="footer ">
                <div className="top-footer">
                    <h3>Dental Care</h3>
                    <p><FontAwesomeIcon icon={faHome} /> 01888222633</p>
                    <p><FontAwesomeIcon icon={faPhone} /> 01888222633</p>
                    <p className="mb-0 pb-3"><FontAwesomeIcon icon={faEnvelope} /> www.@dentalcare.com</p>
                </div>
                <div className="bottom-footer">
                <p className="mb-0 p-4">&copy;All rights reserved by Munna Ahmed</p>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;