import React from 'react';

const Footer = () => {
    return (
        <div>
            <h2 className='text-primary text-center font-bold text-3xl'>Keep In Touch.</h2>
                <p className='text-center text-xl  text-gray-400 py-6'>I'm currently working in <span className='text-secondary'>Front-End Development.</span> 
                <br />
                Feel free to get in touch and discuss about your projects.</p>

                <div className='text-center'>
                <a href="https://www.linkedin.com/in/ahsan-habib-programmer/" target="{_blank}" ><i className="fa-brands fa-linkedin text-primary px-5 text-5xl"></i></a>
                <a href="https://github.com/Ahsan75412" target="{_blank}" ><i className="fa-brands fa-github text-primary px-5 text-5xl"></i></a>
                <a href="https://www.facebook.com/ahsanhabib.mradul/" target="{_blank}"><i className="fa-brands fa-facebook-square text-primary px-5 text-5xl"></i></a>

                </div>

                <p className='text-center text-xl py-5 mt-11 text-secondary'>Copyright &copy; 2022 - All right reserved by ahsan habib</p>


        </div>
    );
};

export default Footer;