import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg  bg-accent text-gray-400 ">
            <figure className=" pt-5 text-primary text-3xl">
                <i className={service.icon}></i>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;