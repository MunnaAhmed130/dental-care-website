import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Demo from '../Demo/Demo';

const Demos = () => {
    const [demos, setDemos] = useState([])
    useEffect(() => {
        fetch('/fakeData2.json')
            .then(res => res.json())
            .then(data => setDemos(data))
    }, [])
    console.log(demos)
    return (
        <div>
            <Row xs={1} md={3} className="g-4 m-4">
            {
                demos.map(demo=>console.log(demo))
            }
            </Row>

        </div>
    );
};

export default Demos;