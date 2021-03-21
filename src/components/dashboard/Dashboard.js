import React from 'react'
import DashboardHeader from './DashboardHeader.js'
import DashboardProjectList from './DashboardProjectList'
import DashboardProjectDetails from './DashboardProjectDetails'
import DashboardFooter from './DashboardFooter'
import CreateProject from '../create-project/CreateProject'
import CreateProject2 from '../create-project2/CreateProject2'
import './dashboard.css'
import Cookies from 'universal-cookie'

class Dashboard extends React.Component {
    state = {
        projects: [],
        projectIndex: null,
        createProject: false,
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
    }
    getProgrammers = () => {
        const cookies = new Cookies 
        const key = cookies.get('key')
        fetch('http://localhost:8000/api/v1/programmers/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
            }
        })
        .then(res => {
            if(!res.ok) {
                throw res
            } else {
                return res.json()
            }
        })
        .then(resJson => {
            this.setState({})
        })
    }
    getUserProjects = () => {
        const cookies = new Cookies
        const key = cookies.get('key')
        let projects = []
        fetch('http://localhost:8000/api/v1/projects/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
            }
        })
        .then(res => {
            if(!res.ok) {
                throw res
            } else {
                return res.json()
            }
        })
        .then(resJson => {
            let projects = resJson
            let userProjects = []
            let userList = []
            for(let projectIndex=0;projectIndex<projects.length;projectIndex++) {
                switch(this.props.userProfile.role) {
                    case 'Programmer': {userList = projects[projectIndex].programmers; break;}
                    case 'Manager': {userList = projects[projectIndex].managers; break;}
                    case 'Client': {userList = projects[projectIndex].clients; break;}
                }
                for(let user of userList) {
                    if(user === this.props.user.id) {
                        userProjects.push(projects[projectIndex])
                    }
                }
            }   
            this.setState({projects: userProjects})
        })
    }
    render() {
        return (
            <div className='dashboard'>
                <React.Fragment>
                    <DashboardHeader
                        // functions
                        handleSignout={this.props.handleSignout}
                    />
                    {this.state.createProject ?
                        <CreateProject2
                            // states
                            users={this.props.users}
                            // functions
                            setTitle={this.props.setTitle}
                            handleState={this.handleState}
                        />
                    :
                        <React.Fragment>
                            <DashboardProjectList
                                // states
                                projects={this.state.projects}
                                user={this.props.user}
                                // functions
                                getUserProjects={this.getUserProjects}
                                getProgrammers={this.getProgrammers}
                                handleState={this.handleState}
                            />
                            {this.state.selectedProject !== null ?
                                <DashboardProjectDetails
                                    // states 
                                    project={this.state.projects[this.state.projectIndex]}
                                    projectIndex={this.state.projectIndex}
                                    users={this.props.users}
                                />
                            :
                                <div></div>
                            }
                        </React.Fragment>
                    }
                    <DashboardFooter/>
                </React.Fragment>
            </div>
        )
    }
    componentDidMount() {
        this.props.setTitle(`${this.props.user.first_name} ${this.props.user.last_name} Available Projects`)
    }
}
export default Dashboard