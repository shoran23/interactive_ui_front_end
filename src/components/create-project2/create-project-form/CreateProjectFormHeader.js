import React from 'react'
import Button from 'react-bootstrap/Button'

class CreateProjectFormHeader extends React.Component {
    render() {
        return (
            <div className='create-project-form-header'>
                <div id='create-project-form-header-options'>
                    <Button className='create-project-form-header-button' variant='success' size='lg' onClick={this.props.handlePostProject}>Confirm</Button>
                    <Button className='create-project-form-header-button' variant='danger' size='lg' onClick={()=> this.props.handleState('createProject',false)}>Cancel</Button>
                </div>
                <div id='create-project-form-header-divider'></div>
            </div>
        )
    }
}
export default CreateProjectFormHeader