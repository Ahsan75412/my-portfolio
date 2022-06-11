import React, {  useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects , setProjects] = useState([]);

    useEffect(() => {
        fetch(`projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div>
            <h4 className='text-2xl text-primary font-bold text-center my-12'>MY PROJECT</h4>
            <div className='grid grid-cols-1 md:grid-row-2 lg:grid-row-2 '>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
                
            </div>
            
        </div>
    );
};

export default Projects;