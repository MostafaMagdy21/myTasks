import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Link, NavLink} from 'react-router-dom';
import NavBar from './component/NavBar';
// import Header from './component/Header';
import ProjectListView from './pages/ProjectListView';
import TaskListView from './pages/taskListView';

export class App extends React.Component{

    state={
        projects:[
            {
                title: "front End",
                id: '1',
                tasks: [
                    {
                        title: "HTML & CSS",
                        id: "1",
                    },
                    {
                        title: "java script",
                        id: "2",
                    },
                    {
                        title: "React.js",
                        id: "3",
                    },
                ]
            },
            {
                title: "back End",
                id: '2'
            },
            {
                title: "LMS",
                id: '3'
            },
            {
                title: "CMS",
                id: '4'
            },
        ],
        newProject: "",
        newTask: "",
    }

// start functions

addNewProjectHandler = (e) =>{
    const newProject = e.target.value;

    this.setState({
        newProject
    })
}

onClickAddNewProject = () =>{
    let projects = this.state.projects;

    projects=[...projects, {
        title: this.state.newProject,
        id: projects.length + 1,
    }]

    this.setState({
        projects,
        newProject: "",
    })
}

onClickDeleteProject = (delPro) =>{
    const projects = this.state.projects.filter((rowProject)=>rowProject != delPro);

    this.setState({
        projects
    })
}

getProjectById = (projectId) =>{

   const project = this.state.projects.filter((project) =>projectId === project.id);

    if(project.length){
        return project[0];
    }else{
        return('no tasks ')
    };
}

onClickDeleteTask = (projectId, taskId) =>{
    const projects = this.state.projects;
    const project = this.getProjectById(projectId);
    
    if(project && project.tasks){
        project.tasks = project.tasks.filter((tasks) =>taskId != tasks.id)
    }

    this.setState({
        projects
    })
}

// onChangeHandlerFromTask = (e) =>{
//     const newTask = e.target.value;


// }


    render(){
        return(
            <React.Fragment>

                <div className="project">
                    <Router>
                        <NavBar/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/">
                                    <ProjectListView projects={this.state.projects}
                                                    addNewProjectHandler={this.addNewProjectHandler}
                                                    newProject={this.state.newProject}
                                                    onClickAddNewProject={this.onClickAddNewProject}
                                                    deletProject={this.onClickDeleteProject}/>
                                </Route>
                                <Route exact path="/tasks/:id">
                                    <TaskListView getProjectById={this.getProjectById}
                                                    onClickDeleteTask={this.onClickDeleteTask}/>
                                </Route>
                            </Switch>
                        </div>

                    </Router>
                </div>
            </React.Fragment>
        )
    }
}

export default App;