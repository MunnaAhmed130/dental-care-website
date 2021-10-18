import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import useFirebase from '../Hooks/useFirebase';
import { HashLink } from 'react-router-hash-link';
import './Header.css'



const Header = () => {
    const { handleLogOut, user } = useFirebase();
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
                  
                    {user.email &&
                            <Navbar.Text> Signed in as: <a href="#login">{user.displayName}</a> </Navbar.Text>
                    }
                        {
                            user.email ?
                                <button onClick={handleLogOut}>Log Out</button>
                                :
                                <Nav.Link as={HashLink} to="/login">login</Nav.Link>
                        }
 
                      
                        

            </Navbar.Collapse>
                                
            </Container>
        </Navbar>
        {/* <Container fluid>
            <Row>
                <Col md='6'>
                <h3 >Dental Care</h3>
                </Col>
                <Col md='6'>
                    <nav  >
                        <Link to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact</Link>
                            <span>{user.name}</span>
                            {
                                user?.displayName ?
                                    <button onClick={handleLogOut}>Log out</button>
                                    :
                                    <Link to="/login">Login</Link>
                            }
                       
                    </nav>
                </Col>
            </Row>
        </Container> */}

    </div>
    );
};

export default Header;