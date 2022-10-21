import React from 'react';
import TaskListItems from './taskListItems';

export const TaskList = (props) =>{
    return(
        <ul className="list-group">
            {props.tasks ? props.tasks.map((taskItems) =>
                <TaskListItems tasks={taskItems}
                                key={taskItems.id}
                                onClickDeleteTask={props.onClickDeleteTask}
                                project={props.project}/>
            )
            : <p className="alert alert-danger text-center">No Tasks Hear</p>}
        </ul>
        
    )
}

export default TaskList ;