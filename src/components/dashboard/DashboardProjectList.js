import React from 'react'
import Button from 'react-bootstrap/Button'

class DashboardProjectListItem extends React.Component {
    render() {
        return (
            <div className='dashboard-project-list-item'>
                <h5>{this.props.project.name}</h5>
                <p>Status: {this.props.project.status}</p>
                <Button variant='link'>Info</Button>
                <Button variant='link'>Review</Button>
            </div>
        )
    }
}

class DashboardProjectList extends React.Component {
    render() {
        return (
            <div id='dashboard-project-list'>
                <h1>Welcome Username</h1>
                <h3>Available Projects</h3>
                <div id='dashboard-project-list-container'>
                    {this.props.projects.map((project,index) => (
                        <DashboardProjectListItem
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default DashboardProjectList