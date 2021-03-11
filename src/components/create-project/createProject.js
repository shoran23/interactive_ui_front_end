import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateProjectSlideShow from './CreateProjectSlideShow'
import CreateProjectDemo from './CreateProjectDemo'
import './create-project.css'

class CreateProject extends React.Component {
    state = {
        customer: '',
        orderNumber: null,
        projectNumber: null,
        name: '',
        client: [0],
        designers: [0],
        managers: [0],
        type: 'None',
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    cancelCreateProject = () => {
        // reset state
        this.setState({customer: ''})
        this.setState({orderNumber: null})
        this.setState({projectNumber: null})
        this.setState({name: ''})
        this.setState({client: [0]})
        this.setState({designers: [0]})
        this.setState({managers: [0]})
        this.setState({type: 'None'})
        // reset create project state
        this.props.handleState('createProject',false)
    }
    render() {
        return (
            <div id='create-project'>
                <div id='create-project-header'>
                    <div id='create-project-header-options'>
                        <Button variant='info' className='create-project-header-option-button'>Confirm</Button>
                        <Button variant='danger' className='create-project-header-option-button' onClick={this.cancelCreateProject}>Cancel</Button>
                    </div>
                    <Form id='create-project-form'>   
                        <Form.Group className='create-project-header-group' id='create-project-form-customer'>
                            <Form.Label>Customer</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Customer Name'
                                id='customer'
                                value={this.state.customer}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group className='create-project-header-group' id='create-project-form-presentation-type'>
                            <Form.Label>Presentation Type</Form.Label>
                            <Form.Control
                                as='select'
                                id='type'
                                value={this.state.type}
                                onChange={this.handleChange}
                            >
                                <option value='None'>Select Presentation Type</option>
                                <option value='Slide Show'>Presentation Slide Show</option>
                                <option value='Demo'>Demo</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className='create-project-header-group' id='create-project-form-name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter Project Name'
                                id='projectName'
                                value={this.state.projectName}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group className='create-project-header-group' id='create-project-form-project-number'>
                            <Form.Label>Project Number</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter Project Number'
                                id='projectNumber'
                                value={this.state.projectNumber}
                                onChange={this.handleChange}
                            />
                        </Form.Group>              
                        <Form.Group className='create-project-header-group' id='create-project-form-order-number'>
                            <Form.Label>Order Number</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter Order Number'
                                id='orderNumber'
                                value={this.state.orderNumber}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group className='create-project-header-group' id='create-project-form-designers'> 
                            <div className='create-project-header-group-header'> 
                                <Form.Label>Designer(s)</Form.Label>
                                <Button size='sm' variant='success'>Add Designer</Button>
                            </div>
                            <Form.Control
                                as='select'
                                id='designers'
                                value={this.state.programmer}
                                onChange={this.handleChange}
                            >
                                <option value=''>Select Designer</option>
                                {/* map through an array of available programmers */}
                            </Form.Control> 
                        </Form.Group>


                        <Form.Group className='create-project-header-group' id='create-project-form-managers'>
                            <div className='create-project-header-group-header'>
                                <Form.Label>Project Manager(s)</Form.Label>
                                <Button size='sm' variant='success'>Add Manager</Button>
                            </div>
                            <Form.Control
                                as='select'
                                id='managers'
                                value={this.setState.manager}
                                onChange={this.handleChange}
                            >
                                <option value=''>Select Project Manager</option>
                                {/* map through managers */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className='create-project-header-group' id='create-project-form-clients'>
                            <div className='create-project-header-group-header'>
                                <Form.Label>Client(s)</Form.Label>
                                <Button size='sm' variant='success'>Add Client</Button>
                            </div>
                            <Form.Control 
                                as='select'
                                id='clients'
                                value={this.setState.clients}
                                onChange={this.handleChange}
                            >
                                <option value=''>Select Client</option>
                                {/* map through clients */}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
                <Col>
                    {this.state.type != 'None' ?
                        <React.Fragment>
                            {this.state.type === 'Slide Show' ?
                                <CreateProjectSlideShow/>
                            :
                                <CreateProjectDemo/>
                            }
                        </React.Fragment>        
                    :
                        <div></div>
                    }
                </Col>
            </div>
        )
    }
    componentDidMount() {
        this.props.setTitle('Create Project')
    }
}
export default CreateProject