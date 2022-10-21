import React from 'react';
import ProjectListItems from './ProjectListItems';

export const ProjectList = (props) =>{
    return(
        <ul className="list-group">
            {props.projects && props.projects.map((project) =>(
                <ProjectListItems projectItems={project}
                                  key={project.id}
                                  deletProject={props.deletProject}/>
            ))}
        </ul>
        
    )
}

export default ProjectList ;