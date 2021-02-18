import { render } from '@testing-library/react';
import React from 'react'
import Table from 'react-bootstrap/Table'

class DashboardProjectDetails extends React.Component {
    render() {
        return (
            <div id='dashboard-project-details'>
                <h3>{this.props.project.name} Details</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Order Number</th>
                            <th>Project Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.project.customer}</td>
                            <td>{this.props.project.order}</td>
                            <td>{this.props.project.name}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th>Designer</th>
                            <th>Submittal</th>
                            <th>Red Thread PM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.project.designer}</td>
                            <td>{this.props.project.submittal}</td>
                            <td>{this.props.project.pm}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default DashboardProjectDetails