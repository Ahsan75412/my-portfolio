import React from 'react';
import Photo from '../../Assets/MyPhoto/myPhoto.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={Photo} className="rounded-full  w-64 h-72 " alt='ahsan' />
                <div className='w-4/6 pl-4'>
                
                    <h1 className="text-3xl font-bold text-primary"><i className="fa-solid fa-user-graduate"></i> About Me</h1>
                    <p className="py-6 text-gray-400 text-xl ">I am Ahsan Habib from Bogura, Bangladesh. Right now, I'm studying Bachelor of Compute
                        Science and Engineering from pundra university of science and technology. I have hands-on experience efficiently coding websites and applications using modern languages (HTML5, CSS3, Bootstrap, Tailwind, JavaScript,  React JS , Node Js ,ExpressJs MongoDB ). Interested in learning new technologies and passionate in working with a dedicated teams to build efficient applications to the users need.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;