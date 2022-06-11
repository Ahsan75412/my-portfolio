import React from 'react';

const ProjectDetail = ({children}) => {
    const { image, name, description } = children;
  
    
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            
            <img className='w-1/2' src={image} alt="img" />
            <div className='w-1/2 '>
                <h2 className="py-6 text-gray-400 text-xl ">{name}</h2>
                <h3 className="py-2 text-gray-400 text-xl ">{description}</h3>

            </div>
        </div>

    </div>
    );
};

export default ProjectDetail;