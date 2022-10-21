import React from 'react';
import TaskListItems from './taskListItems';

export const TaskList = (props) =>{
    return(
        <ul>
            {props.tasks && props.tasks.map((tasksItems) =>
                <TaskListItems tasksItems={tasksItems}/>
            )}
        </ul>
        
    )
}

export default TaskList ;