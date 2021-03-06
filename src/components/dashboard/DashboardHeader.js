import React from 'react'

class DashboardHeader extends React.Component {
    render() {
        return (
            <div id='dashboard-header'>
                <div className='dashboard-header-segment'>
                    <button className='dashboard-header-button'>Account</button>
                    <button className='dashboard-header-button' onClick={this.props.handleSignout}>Sign Out</button>
                </div>
            </div>
        )
    }
}
export default DashboardHeader