import React from 'react';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;