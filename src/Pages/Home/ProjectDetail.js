import React from 'react';


const ProjectDetail = ({project}) => {
    const { image, name, description,Tools,technology,link } = project;
  
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            
            <img className='w-1/2' src={image} alt="img" />
            <div className='w-1/2 '>
                <h2 className="py-6  text-xl text-primary ">{name}</h2>
                <h3 className="py-2 text-gray-400 text-xl ">{description}</h3>
                <h3 className="py-2 text-gray-400 text-xl "><span className='text-secondary'>Technology :</span> {technology}</h3>
                <h3 className="py-2 text-gray-400 text-xl "><span className='text-secondary'>Tools : </span>{Tools}</h3>

                <a href={link} target="{_blank}" className='btn btn-warning font-bold'><i class="fa-solid fa-eye mr-2"></i>Live</a>
                <a href={link} target="{_blank}" className='btn btn-warning font-bold ml-2'><i class="fa-solid fa-eye"></i>Repository</a>

            </div>
        </div>

    </div>
    );
};

export default ProjectDetail;