import React from 'react';
import TaskList from './componentFile/taskList';

export const TaskListView = (props) =>{
    return(
        <React.Fragment>
            <div className="header">
                <h1 className="text-center">ProjectManegment</h1>

                <input className="form-control m-2" type="text"/>

                <button className="btn btn-success btn-block m-2">
                    Add
                </button>
            </div>
            <TaskList tasks={props.tasks}/>
        </React.Fragment>
    )
}

export default TaskListView;