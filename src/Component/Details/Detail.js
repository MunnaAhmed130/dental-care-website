import { useParams } from 'react-router';
import React from 'react';

const Detail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h3>This is details {serviceId} </h3>
        </div>
    );
};

export default Detail;