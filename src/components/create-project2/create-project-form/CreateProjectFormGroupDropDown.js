import React from 'react'
import Form from 'react-bootstrap/Form'

class CreateProjectFormGroupDropDown extends React.Component {
    render() {
        return (
            <div className='create-project-form-group' id={this.props.controlId}>
                <Form.Group className='create-project-form-group-drop-down'>  
                    <Form.Label>{this.props.label}</Form.Label>
                    <Form.Control
                        as='select'
                        id={this.props.inputId}
                        value={this.props.inputValue}
                        onChange={this.props.onChange}
                    >
                        {this.props.options.map((option,index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </div>
        )
    } 
}
export default CreateProjectFormGroupDropDown