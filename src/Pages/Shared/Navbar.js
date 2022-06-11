import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const menuItems = <>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/about">About</Link></li>
        <li ><Link to="/services">Services</Link></li>
        <li ><Link to="/project">Project</Link></li>
        <li ><Link to="/skill">Skill</Link></li>
        <li ><Link to="/contact">Contact</Link></li>
        
    </>
    return (
        <div className="navbar sticky top-0 z-10 bg-accent  ">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:text-blue-600 ">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-primary"><i className="fa-solid fa-user ml-2 mr-2"></i>Ahsan's Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;