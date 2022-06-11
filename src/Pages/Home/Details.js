import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

const Details = () => {
    const { _id } = useParams();
    const [projectsDetails , setProjectsDetails] = useState(_id);

    useEffect(() => {
        fetch(`projects.json`)
            .then(res => res.json())
            .then(data => setProjectsDetails(data))
    }, []);
    return (
        <div>
            {
                projectsDetails.map(project => <ProjectDetail key={project.id} project={project}></ProjectDetail>)
            }
            
        </div>
    );
};

export default Details;