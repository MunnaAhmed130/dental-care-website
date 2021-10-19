import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();
    if (isLoading) {
        return   <Spinner animation="border" variant="danger" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => 
                user.email ? children :
                    <Redirect
                        to={{
                            pathname: '/register',
                            state: { from: location}
                        }}
                    ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;