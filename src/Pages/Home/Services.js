import React from 'react';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            icon: 'fa-brands fa-codepen',
            name: 'Frontend Development',
            description: 'Develop Modern looking UI using HTML, CSS , JavaScript , and ReactJS.',
        },
        {
            _id:2,
            icon: 'fa-solid fa-code',
            name: 'Backend Development',
            description: 'Backend Develop Using REST API , NodeJS , ExpressJS , MongoDB , and more.',
        },
        {
            _id:3,
            icon: 'fa-solid fa-cogs',
            name: 'Responsive Design',
            description: 'Making websites responsive for all devices. and also make them look good on all devices.',
        }
    ];

    return (
        <div className='pb-6'>
        <div className='text-center'>
            <h3 className='text-primary  text-xl font-bold uppercase'>Services</h3>
           
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12'>
            {
                services.map(service =><Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;