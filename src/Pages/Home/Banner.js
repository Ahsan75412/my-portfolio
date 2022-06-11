import React from 'react';
import myPhoto from '../../Assets/MyPhoto/ahsans.png';
import './Banner.css';


const Banner = () => {
    return (
        <div className="hero min-h-screen" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={myPhoto} className="lg:max-w-sm rounded-lg  lg:w-54 hero-right-side top-animation" alt='img' />
                <div className=''>
                <h2 className="text-2xl text-primary"> Hey There! I'm </h2>
                    <h1 className="text-4xl font-bold text-white ">Md Ahsan Habib</h1>
                    <p className="py-6 text-gray-400 text-xl"> <span className='text-white'>MERN Stack Developer.</span>  As a web application developer proficient at building responsive web applications from front end to back-end.</p>
                    <a href={"https://drive.google.com/file/d/1YXdDEXZu_f2fFNt5aGZq9QQBuBIsPEbL/view?usp=sharing"} target="{_blank}" className="btn btn-warning font-bold">
                    <i className="fa-solid fa-file-arrow-down mx-2"></i>
                        Resume
                     </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;