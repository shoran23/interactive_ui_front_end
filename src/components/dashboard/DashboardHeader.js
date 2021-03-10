import React from 'react'
import Button from 'react-bootstrap/Button'

class DashboardHeader extends React.Component {
    render() {
        return (
            <div id='dashboard-header'>
                <div className='dashboard-header-segment'>
                    <Button variant='dark' className='dashboard-header-button'>Account</Button>
                    <Button variant='dark' className='dashboard-header-button' onClick={this.props.handleSignout}>Sign Out</Button>
                </div>
            </div>
        )
    }
}
export default DashboardHeader