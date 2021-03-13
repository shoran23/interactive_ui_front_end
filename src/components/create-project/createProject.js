import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateProjectSlideShow from './CreateProjectSlideShow'
import CreateProjectDemo from './CreateProjectDemo'
import './create-project.css'
import Cookies from 'universal-cookie'

class CreateProject extends React.Component {
    state = {
        customer: '',
        orderNumber: null,
        projectNumber: null,
        name: '',
        clients: [0],
        designers: [0],
        managers: [0],
        type: 'None',
        availableDesigners: [{name: 'Select Designers', value: ''}],
        availableManagers: [{name: 'Select Managers', value: ''}],
        availableClients: [{name: 'Select Clients', value: ''}],
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    handleArrayChange = index => e => {
        let array = this.state[e.target.id]
        array[index] = e.target.value
        this.setState({[e.target.id]: array})
    }
    handleArrayRemove = (key,index) => {
        console.log('handle array remove')
        console.log('index = ',index)
        console.log('key = ',key)

        let array = this.state[key]
        array.splice(index,1)
        this.setState({[key]: array})
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
    increaseArray = (key) => {
        let array = this.state[key]
        array.push(0)
        this.setState({[key]: array})
    }
    /* RETURN USER ************************************************************************************************************************************************/
    returnUser = id => {
        for(let user of this.props.users) {
            if(user.id === id) {
                return user
            }
        } 
    }
    /* REQUESTS ***************************************************************************************************************************************************/
    getAvailableUsers = () => {
        let userTypes = ['programmers','managers','clients']
        const cookies = new Cookies 
        const key = cookies.get('key')
        for(let userType of userTypes) {
            fetch(`http://localhost:8000/api/v1/${userType}/`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + key
                }
            })
            .then(res => {
                if(!res.ok) {
                    throw res 
                } else {
                    return res.json()
                }
            })
            .then(resJson => {
                let availableDesigners = []
                let designers = resJson
                switch(userType) {
                    case 'programmers': {
                        for(let designer of designers) {
                            console.log('designers.user = ',designer.user)
                            let user = this.returnUser(designer.user)
                            designers.push(user)
                        }
                        this.setState({availableDesigners})
                        break;
                    }
                    case 'managers': this.setState({availableManagers: resJson}); break;
                    case 'clients': this.setState({availableClients: resJson}); break;
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
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

                        <div className='create-project-form-group-container'>
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
                        </div>

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

                        <div className='create-project-form-group-container'>
                            <Form.Group id='create-project-form-designers' className='create-project-header-group'> 
                                <div className='create-project-header-group-header'> 
                                    <Form.Label>Designer(s)</Form.Label>
                                    <Button size='sm' variant='success' onClick={()=> this.increaseArray('designers')}>Add Designer</Button>
                                </div>
                                {this.state.designers.map((designer,index) => (
                                    <div className='create-project-group-user'>
                                        <Form.Control
                                            key={index}
                                            as='select'
                                            id='designers'
                                            value={this.state.programmer}
                                            onChange={this.handleArrayChange(index)}
                                        >
                                            <option>Select a Designer</option>
                                            {this.state.availableDesigners.map(designer => {
                                                <div>
                                                    <option value={designer.value}>{designer.name}</option>
                                                </div>
                                            })}
                                        </Form.Control> 
                                        <Button variant='link' onClick={()=> this.handleArrayRemove('designers',index)}>Remove</Button>
                                    </div>
                                ))}
                            </Form.Group>
                        </div>

                        <div className='create-project-form-group-container'>
                            <Form.Group className='create-project-header-group' id='create-project-form-managers'>
                                <div className='create-project-header-group-header'>
                                    <Form.Label>Project Manager(s)</Form.Label>
                                    <Button size='sm' variant='success' onClick={()=> this.increaseArray('managers')}>Add Manager</Button>
                                </div>
                                {this.state.managers.map((manager,index) => (
                                    <div className='create-project-group-user'>
                                        <Form.Control
                                            key={index}
                                            as='select'
                                            id='managers'
                                            value={this.setState.manager}
                                            onChange={this.handleArrayChange(index)}
                                        >
                                            <option value=''>Select Project Manager</option>
                                            <option value='test'>test</option>
                                            {/* map through managers */}
                                        </Form.Control>
                                        <Button variant='link' onClick={()=> this.handleArrayRemove('managers',index)}>Remove</Button>
                                    </div>
                                ))}
                            </Form.Group>
                        </div>


                        <div className='create-project-form-group-container'>
                            <Form.Group className='create-project-header-group' id='create-project-form-clients'>
                                <div className='create-project-header-group-header'>
                                    <Form.Label>Client(s)</Form.Label>
                                    <Button size='sm' variant='success' onClick={()=> this.increaseArray('clients')}>Add Client</Button>
                                </div>
                                {this.state.clients.map((client,index) => (
                                    <div className='create-project-group-user'>
                                        <Form.Control 
                                            key={index}
                                            as='select'
                                            id='clients'
                                            value={this.setState.clients}
                                            onChange={this.handleArrayChange(index)}
                                        >
                                            <option value=''>Select Client</option>
                                            <option value='test'>test</option>
                                            {/* map through clients */}
                                        </Form.Control>  
                                        <Button variant='link' onClick={()=> this.handleArrayRemove('clients',index)}>Remove</Button>
                                    </div>                             
                                ))}
                            </Form.Group>
                        </div>

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
        this.getAvailableUsers()
    }
}
export default CreateProject