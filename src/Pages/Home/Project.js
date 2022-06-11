import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({project , children}) => {
    const { _id, image, name, description,link  } = project;

    const navigate = useNavigate();
    const nevigateToProjectDetail = (id) => {
        navigate(`/project/${id}`);
    }

    return (
        <div className="hero my-8" >
            <div className="hero-content flex-col lg:flex-row">
                <img className='lg:w-1/2' src={image} alt="img" />
                <div className='lg:w-1/2 '>
                    <h2 className="py-6 text-gray-400 text-xl ">{name}</h2>
                    <h3 className="py-2 text-gray-400 text-xl ">{description}</h3>
                    <a href={link} target="{_blank}"  className='btn btn-warning font-bold mr-3 mt-3'><i class="fa-solid fa-eye mr-2"></i> Preview</a>

                    <button onClick={() => nevigateToProjectDetail(_id)} className='btn btn-warning font-bold '><i class="fa-solid fa-file-lines mr-2"></i> details</button>
                    {
                        children
                    }


                </div>
            </div>

        </div>
    );
};

export default Project;