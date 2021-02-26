import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateProjectSlideShow from './CreateProjectSlideShow'
import CreateProjectDemo from './CreateProjectDemo'

class CreateProject extends React.Component {
    state = {
        customer: '',
        orderNumber: null,
        projectNumber: null,
        name: '',
        designers: [],
        managers: [],
        type: 'None',
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    render() {
        console.log('this.state.type = ',this.state.type)
        return (
            <div className='create-project'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Customer</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Customer Name'
                                    id='customer'
                                    value={this.state.customer}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Order Number</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter Order Number'
                                    id='orderNumber'
                                    value={this.state.orderNumber}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                                <Form.Label>Project Number</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter Project Numnber'
                                    id='projectNumber'
                                    value={this.state.projectNumber}
                                    onChange={this.handleChange}
                                />
                            <Form.Group/>
                            <Form.Group>
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
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Project Name'
                                    id='projectName'
                                    value={this.state.projectName}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Form.Label>Designer(s)</Form.Label>
                                    <Button size='sm' variant='success'>Add Designer</Button>
                                </Row>
                                <Form.Control
                                    as='select'
                                    id='programmer'
                                    value={this.state.programmer}
                                    onChange={this.handleChange}
                                >
                                    <option value=''>Select Designer</option>
                                    {/* map through an array of available programmers */}
                                </Form.Control> 
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Form.Label>Project Manager</Form.Label>
                                    <Button size='sm' variant='success'>Add Manager</Button>
                                </Row>
                                <Form.Control
                                    as='select'
                                    id='manager'
                                    value={this.setState.manager}
                                    onChange={this.handleChange}
                                >
                                    <option value=''>Select Project Manager</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
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