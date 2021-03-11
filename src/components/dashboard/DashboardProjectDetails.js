import React from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class DashboardProjectDetails extends React.Component {
    render() {
        return (
            <div id='dashboard-project-details'>
                {this.props.projectIndex !== null ?
                    <React.Fragment>
                        <h3>{this.props.project.name} Details</h3>
                        <Form>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Customer</Form.Label>
                                    <Form.Text>Testing</Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Order Number</Form.Label>
                                    <Form.Text>Testing</Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Text>Testing</Form.Text>
                                </Form.Group>
                            </Row>
     


                    
                            {/* <thead>
                                <tr>
                                    <th>Designer</th>
                                    <th>Submittal</th>
                                    <th>Red Thread PM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Programmer</td>
                                    <td>{this.props.project.submittal}</td>
                                    <td>{this.props.project.pm}</td>
                                </tr>
                            </tbody> */}
                        </Form>

                        





                    </React.Fragment>
                :
                    <div></div>
                }
            </div>
        )
    }
}
export default DashboardProjectDetails