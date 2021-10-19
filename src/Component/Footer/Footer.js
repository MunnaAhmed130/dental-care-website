import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer ">
                <div className="top-footer mt-5 pt-3">
                    <h4>Dental Care</h4>
                    <p><FontAwesomeIcon icon={faHome} /> 73 Canal Street, New York, NY</p>
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