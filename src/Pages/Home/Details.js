import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data';
import ProjectDetail from './ProjectDetail';

const Details = () => {
    const { id } = useParams();

    const project = data.find(item => item._id === id);
    console.log(project);

    return (
        <div>
            <ProjectDetail project={project} />
        </div>
    );
};

export default Details;