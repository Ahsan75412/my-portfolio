import React from 'react';
import About from './About';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
        </div>
    );
};

export default Home;