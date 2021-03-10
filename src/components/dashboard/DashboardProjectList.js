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
                <Button variant='link' onClick={()=> this.props.handleState('projectIndex',this.props.index)}>Info</Button>
                <Button variant='link'>Review</Button>
            </Row>
        )
    }
}
class DashboardProjectList extends React.Component {
    render() {
        return (
            <div id='dashboard-project-list'>
                <h1>{`Welcome ${this.props.user.first_name}`}</h1>
                <h3>Available Projects</h3>
                <div id='dashboard-project-list-container'>
                    {this.props.projects.length > 0 ?
                        <React.Fragment>
                            {this.props.projects.map((project,index) => (
                                <DashboardProjectListItem
                                    // states
                                    key={index}
                                    project={project}
                                    index={index}
                                    // functions
                                    handleState={this.props.handleState}
                                />
                            ))}
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <p>No Projects Available</p>
                        </React.Fragment> 
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getProgrammers()
        this.props.getUserProjects()
    }
}
export default DashboardProjectList