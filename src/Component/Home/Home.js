import React from 'react';
import Banner from '../Banner/Banner';
import Demo from '../Demo/Demo';
import Demos from '../Demos/Demos';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Demos></Demos>
        </div>
    );
};

export default Home;