import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';
import './Header.css'



const Header = () => {
    const { handleLogOut, user } = useAuth();
    return (
        <div className="header">
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                    <Navbar.Brand href="#home">Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                  
                    {user.displayName &&
                            <Navbar.Text>Signed in as:<a href="#user">{user.displayName}</a> </Navbar.Text>
                    }
                        {
                            user.email ?
                                <button onClick={handleLogOut}>Log Out</button>
                                :
                                <Nav.Link as={HashLink} to="/register">Register</Nav.Link>
                        }
 
 {/* <Nav.Link as={HashLink} to="/register">Register</Nav.Link> */}
            </Navbar.Collapse>
                                
            </Container>
        </Navbar>
    </div>
    );
};

export default Header;