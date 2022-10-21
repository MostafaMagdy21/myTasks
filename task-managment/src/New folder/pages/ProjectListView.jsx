import React from 'react';
import ProjectList from './componentFile/ProjectList';

export const ProjectListView = (props) =>{
    return(
        <React.Fragment>
            <div className="header">
                <h1 className="text-center">ProjectManegment</h1>

                <input className="form-control m-2"
                        onChange={props.addNewProjectHandler}
                    value={props.newProject}
                    type="text"/>

                <button className="btn btn-success btn-block m-2"
                        onClick={props.onClickAddNewProject}>
                    Add
                </button>
            </div>

            <ProjectList projects={props.projects}
                        deletProject={props.deletProject}/>
        </React.Fragment>
    )
}

export default ProjectListView ;