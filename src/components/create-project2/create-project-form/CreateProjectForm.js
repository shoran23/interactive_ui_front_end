import React from 'react'
import CreateProjectFormHeader from './CreateProjectFormHeader'
import CreateProjectFormGroupInput from './CreateProjectFormGroupInput'
import CreateProjectFormGroupDropDown from './CreateProjectFormGroupDropDown'
import CreateProjectFormGroupUser from './CreateProjectFormGroupUser'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateProjectForm extends React.Component {
    render() {
        return (
            <div id='create-project-form-container'>
                <Form className='create-project-form'>
                    <CreateProjectFormHeader
                        // functions
                        handlePostProject={this.props.handlePostProject}
                    />
                    <CreateProjectFormGroupInput
                        // states
                        controlId='create-project-form-customer'
                        label='Customer'
                        placeholder='Enter project customer'
                        inputId='customer'
                        inputValue={this.props.customer}
                        // functions
                        handleChange={this.props.handleChange}
                    />
                    <CreateProjectFormGroupInput
                        // states
                        controlId='create-project-form-project-name'
                        label='Project Name'
                        placeholder='Enter project name'
                        inputId='name'
                        inputValue={this.props.name}
                        // functions
                        handleChange={this.props.handleChange}
                    />
                    <CreateProjectFormGroupInput
                        // states
                        controlId='create-project-form-project-number'
                        label='Project Number'
                        placeholder='Enter project number'
                        inputId='projectNumber'
                        inputValue={this.props.projectNumber}
                        // functions
                        handleChange={this.props.handleChange}
                    />
                    <CreateProjectFormGroupInput
                        // states
                        controlId='create-project-form-order-number'
                        label='Order Number'
                        placeholder='Enter order number'
                        inputId='orderNumber'
                        inputValue={this.props.orderNumber}
                        // functions
                        handleChange={this.props.handleChange}
                    />
                    <CreateProjectFormGroupDropDown
                        // states
                        controlId='create-project-form-type'
                        label='Project Type'
                        inputId='project_type'
                        inputValue={this.props.project_type}
                        options={[
                            {label: 'Select Project Type', value: ''},
                            {label: 'Interactive', value: 'Interactive'},
                            {label: 'Slide Show', value: 'Slide Show'}
                        ]}
                        // functions
                        onChange={this.props.handleChange}
                    />
                    <CreateProjectFormGroupUser
                        // states
                        label='Designer(s)'
                        addLabel='Add Designer(s)'
                        controlId='create-project-form-group-user-programmers'
                        users={this.props.programmers}
                        availableUsers={this.props.programmerList}
                        id='programmers'
                        // functions    
                        handleArrayChange={this.props.handleArrayChange}
                        increaseArray={this.props.increaseArray}
                        handleArrayRemove={this.props.handleArrayRemove}

                    />
                    <CreateProjectFormGroupUser
                        // states
                        label='Manager(s)'
                        addLabel='Add Managers(s)'
                        controlId='create-project-form-group-user-managers'
                        users={this.props.managers}
                        availableUsers={this.props.managerList}
                        id='managers'
                        // functions
                        handleArrayChange={this.props.handleArrayChange}
                        increaseArray={this.props.increaseArray}
                        handleArrayRemove={this.props.handleArrayRemove}
                    />
                    <CreateProjectFormGroupUser
                        // states
                        label='Client(s)'
                        addLabel='Add Client(s)'
                        controlid='create-project-form-group-user-clients'
                        users={this.props.clients}
                        availableUsers={this.props.clientList}
                        id='clients'
                        // functions
                        handleArrayChange={this.props.handleArrayChange}
                        increaseArray={this.props.increaseArray}
                        handleArrayRemove={this.props.handleArrayRemove}
                    />
                </Form>
            </div>
        )
    }
}
export default CreateProjectForm