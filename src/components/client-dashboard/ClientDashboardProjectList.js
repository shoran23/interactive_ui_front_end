import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

class DashboardProjectListItem extends React.Component {
    render() {
        return (
            <Row className='dashboard-project-list-item'>
                <h5>{this.props.project.name}</h5>
                <p>Status: {this.props.project.status}</p>
                <p>Type: {this.props.project.type}</p>
                <Button variant='link'>Info</Button>
                <Button variant='link'>Review</Button>
            </Row>
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