import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { handleGoogleSignIn, handleSignIn, error } = useAuth();

    return (
        <div className="login">
            <Form  className=" login-form" >
                <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree with the terms and conditions" required/>
                </Form.Group>
                <Button onClick={handleSignIn} variant="primary" type="submit">
                    Submit
                </Button>
            </Form><br />
            <p>{error}</p>
            <Link to="/register">Create an Account</Link><br />
                    <Button  variant="primary" >
                Google Sign In
            </Button>
        </div>
    );
};

export default Login;