import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div className=" mx-auto lg:px-12">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;