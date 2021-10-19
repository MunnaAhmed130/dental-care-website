import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleSignUp, handleGoogleSignIn, handleEmail, handlePassword, toggleLogin, isLogin, error } = useAuth();
    return (
        <div className="register">
            <h3 className="pt-5">Please {isLogin ? 'Login' : 'Register'}</h3>
            <Form onSubmit={handleSignUp} className="register-form " >
                <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    <p className="text-danger">{error}</p>
                </Form.Group>
                <Form.Group className="mb-3 w-25 m-auto" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="Already have an account?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                {isLogin ? 'Login' : 'Register'}
                </Button>
            </Form><br />
            {/* <p>
                <Link to="/login">Already have an account?</Link>
            </p> */}
            <br />
                    <Button onClick={handleGoogleSignIn} className="mb-3" variant="primary" >
                Google Sign In
            </Button>
        </div>
    );
};

export default Register;