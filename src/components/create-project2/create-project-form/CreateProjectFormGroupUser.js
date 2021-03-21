import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class FormGroupUser extends React.Component {
    render() {
        return (
            <React.Fragment>
            {this.props.availableUsers.length > 0 ?
                <div className='create-project-group-user'>
                    <Form.Control
                        as='select'
                        id={this.props.id}
                        value={this.props.users[this.props.index].user}
                        onChange={this.props.handleArrayChange(this.props.index)}
                    >
                        <option>Select</option>
                        {this.props.availableUsers.map(availableUser => (
                            <option key={availableUser.user} value={availableUser.user}>{availableUser.first_name} {availableUser.last_name}</option>
                        ))}
                    </Form.Control>
                    <Button onClick={()=> this.props.handleArrayRemove(this.props.id,this.props.index)}>Remove</Button>
                </div>
            :
                <div>No Available Users</div>
            }
            </React.Fragment>
        )
    }
}
class CreateProjectFormGroupUser extends React.Component {
    render() {
        return (
            <div className='create-project-form-group' id={this.props.controlId}>
                <Form.Group className='create-project-form-group-user'>
                    <div className='create-project-form-group-user-header'>
                        <Form.Label>{this.props.label}</Form.Label>
                        <Button size='sm' variant='success' onClick={()=> this.props.increaseArray(this.props.id)}>{this.props.addLabel}</Button>
                    </div>
                    {this.props.users.length > 0 ?
                        <React.Fragment>
                            {this.props.users.map((user,index) => (
                                <FormGroupUser
                                    // states
                                    key={index}
                                    index={index}
                                    availableUsers={this.props.availableUsers}
                                    users={this.props.users}
                                    id={this.props.id}
                                    // functions
                                    handleArrayChange={this.props.handleArrayChange}
                                    handleArrayRemove={this.props.handleArrayRemove}
                                />
                            ))}
                        </React.Fragment>
                    :
                        <div>No Available Users</div>
                    }

                </Form.Group>
            </div>
        )
    }
}
export default CreateProjectFormGroupUser