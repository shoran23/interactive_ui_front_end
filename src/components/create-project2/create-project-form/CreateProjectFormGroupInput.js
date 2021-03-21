import React from 'react'
import Form from 'react-bootstrap/Form'

class CreateProjectFormGroupInput extends React.Component {
    render() {
        return (
            <div className='create-project-form-group-input' id={this.props.controlId}>
                <Form.Group className='create-project-form-group-input'>
                    <Form.Label>{this.props.label}</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder={this.props.placeholder}
                        id={this.props.inputId}
                        value={this.props.inputValue}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
            </div>
        )
    }
}
export default CreateProjectFormGroupInput