import React from 'react';
import TaskList from '../component/tasks/taskList';
import { useParams } from 'react-router-dom';


export const TaskListView = (props) =>{

    const {id} = useParams(),
            project = props.getProjectById(id)
        ;

    return(
        <React.Fragment>
            <div className="header">
                <h1 className="text-center">{project.title} : ProjectManegment</h1>

                <input className="form-control m-2" type="text"/>

                <button className="btn btn-success btn-block m-2">
                    Add
                </button>
            </div>
            <TaskList tasks={project.tasks && project.tasks}
                        onClickDeleteTask={props.onClickDeleteTask}
                        project={project}/>
        </React.Fragment>
    )
}

export default TaskListView;