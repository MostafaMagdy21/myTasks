import React from 'react';

export class TaskListItems extends React.Component{

    state={
        EditeTask: "",
        Editable: false,
    }

    onClickEditeButton = () =>{
        this.setState({
            Editable: true,
            EditeTask: this.props.tasks.title,
        })
    }

    onClickSaveButton = () =>{
        let project = this.props.tasks;
            project.title = this.state.EditeTask;

        this.setState({
            EditeTask: "",
            Editable: false,
        })
    }

    onChangeTaskHandler = (e) =>{
        const EditeTask = e.target.value;

        this.setState({
            EditeTask
        })
    }

    render(){
        return(
            <li className="list-group-item">
                <span className="btn btn-light">
                    {this.state.Editable ?
                        <input type="text"
                                value={this.state.EditeTask}
                                onChange={this.onChangeTaskHandler}/>
                        : this.props.tasks.title}
                </span>

                {this.state.Editable?
                    <button className="btn btn-info float-right m-2"
                            onClick={this.onClickSaveButton}>
                        Save
                    </button>
                    : <button className="btn btn-info float-right m-2"
                                onClick={this.onClickEditeButton}>
                        Edite
                    </button>
                }

                <button className="btn btn-danger float-right m-2"
                        onClick={()=>this.props.onClickDeleteTask(this.props.project.id, this.props.tasks.id)}>
                    Delete
                </button>
            </li>
        )
    }
}

export default TaskListItems ;