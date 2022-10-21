import React from 'react';
import {NavLink} from 'react-router-dom';


export class ProjectListItems extends React.Component{

    state={
        editeProject: "",
        editable: false,
    }

    onChangeProjectHandler = (e) =>{
        const editeProject = e.target.value;

        this.setState({
            editeProject
        })
    }

    onClickEditeProject = () =>{
        this.setState({
            editable: true,
            editeProject: this.props.projectItems.title
        })
    }

    onClickSaveProject = () =>{
        let projects = this.props.projectItems;
            projects.title = this.state.editeProject;

        this.setState({
            editeProject: "",
            editable: false,
        })
    }

    render(){
        return(
            <li className="list-group-item">
                {this.state.editable ? 
                    <input type="text"
                            value={this.state.editeProject}
                            onChange={this.onChangeProjectHandler}/>
                    : <NavLink className="btn btn-light mr-3" to={`/tasks/${this.props.projectItems.id}`}>
                        {this.props.projectItems.title}
                    </NavLink>
                }

                {this.state.editable ? 
                    <button className="btn btn-primary float-right m-2"
                            onClick={this.onClickSaveProject}>
                        Save
                    </button>
                    : <button className="btn btn-primary float-right m-2"
                                onClick={this.onClickEditeProject}>
                        Edite
                    </button>
                }

                <button className="btn btn-danger float-right m-2"
                        onClick={() =>this.props.deletProject(this.props.projectItems)}>
                    Delete
                </button>

            </li>
        )
    }
}

export default ProjectListItems ;