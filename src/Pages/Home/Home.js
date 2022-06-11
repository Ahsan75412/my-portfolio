import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;