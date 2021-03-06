import React from 'react'
import DashboardHeader from './DashboardHeader.js'
import DashboardProjectList from './DashboardProjectList'
import DashboardProjectDetails from './DashboardProjectDetails'
import DashboardFooter from './DashboardFooter'
import CreateProject from '../create-project/CreateProject'
import './dashboard.css'

class Dashboard extends React.Component {
    state = {
        user: 'User',
        projects: [
            {name: 'Project 1', status: 'Update Pending', type: 'Slide Show', customer: 'customer 1', order: '111111', designer: 'S.Horan', submittal: '2/17/21', pm: 'Gabe Wolloff', 
                panels: [{make: 'Crestron', model: "TSW-1060", resolution: '1280x800px', image: 'crestron-tsw1060.png'}
            ]},
            {name: 'Project 2', status: 'ready for review', customer: 'customer 1', order: '222222', designer: 'S.Horan', submittal: '2/18/21', pm: 'Gabe Wolloff', panels: [1]},
            {name: 'Project 3', status: 'ready for review', customer: 'customer 1', order: '333333', designer: 'S.Horan', submittal: '2/19/21', pm: 'Gabe Wolloff', panels: [2,2]},
            {name: 'Project 4', status: 'approved', customer: 'customer 1', order: '444444', designer: 'S.Horan', submittal: '2/20/21', pm: 'Gabe Wolloff', panels: [1,1,1]},
            {name: 'Project 5', status: 'project complete', customer: 'customer 1', order: '555555', designer: 'S.Horan', submittal: '2/21/21', pm: 'Gabe Wolloff', panels: [3]},
        ],
        selectedProject: 0,
        createProject: false,
    }
    render() {
        return (
            <div className='dashboard'>
                {this.state.createProject ?
                    <CreateProject
                        // functions
                        setTitle={this.props.setTitle}
                    />
                :
                    <React.Fragment>
                        <DashboardHeader
                            // functions
                            handleSignout={this.props.handleSignout}
                        />
                        <DashboardProjectList
                            // states
                            projects={this.state.projects}
                        />
                        {this.state.selectedProject !== null ?
                            <DashboardProjectDetails
                                // states 
                                project={this.state.projects[this.state.selectedProject]}
                            />
                        :
                            <div></div>
                        }
                        <DashboardFooter/>
                    </React.Fragment>
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.setTitle(`${this.state.user} Available Projects`)
    }
}
export default Dashboard