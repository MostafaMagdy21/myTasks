import React from 'react';

export class TaskListItems extends React.Component{
    render(){
        return(
        <li>{this.props.tasksItems.title}</li>
        )
    }
}

export default TaskListItems ;