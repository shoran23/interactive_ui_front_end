import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import "bootstrap/dist/css/bootstrap.min.css"


class WelcomeSignIn extends React.Component {
    render() {
        console.log(this.props.errors)
        return (
            <Form className='welcome-login-form'>
                {this.props.errors.length > 0 ?
                    <React.Fragment>
                        {this.props.errors.map(error => (
                            <p className='welcome-error'>{error}</p>
                        ))}
                    </React.Fragment>
                :
                    <div></div>
                }
                <Form.Control
                    className='welcome-login'
                    type='email'
                    placeholder='Email'
                    id='email'
                    value={this.props.email}
                    onChange={this.props.handleChange}
                />
                <Form.Control
                    className='welcome-login'
                    type='test'
                    placeholder='Username'
                    id='username'
                    value={this.props.username}
                    onChange={this.props.handleChange}
                />
                <Form.Control
                    className='welcome-login'
                    type='password'
                    placeholder='Password'
                    id='password'
                    value={this.props.password}
                    onChange={this.props.handleChange}
                />
                <Button variant='primary' className='welcome-login' onClick={this.props.handleSignin}>Log In</Button>
                <Button variant='link'>Forgot Password?</Button>
                <Button variant='success' className='welcome-login' onClick={()=> this.props.handleDirect('session','register')}>Register</Button>
            </Form>
        )
    }
}
class WelcomeRegister extends React.Component {
    render() {
        return (
            <Form className='welcome-register-form'>
                {this.props.errors.length > 0 ?
                    <React.Component>
                        {this.props.errors.map(error => (
                            <p>{error}</p>
                        ))}
                    </React.Component>
                :
                    <div></div>
                }
                <Form.Group className='welcome-register'>
                    <Form.Control
                        type='text'
                        placeholder='First Name'
                        id='firstName'
                        value={this.props.firstName}
                        onChange={this.props.handleChange}
                    />
                    <Form.Control
                        type='text'
                        placeholder='Last Name'
                        id='lastName'
                        value={this.props.lastName}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group className='welcome-register'>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        id='username'
                        value={this.props.username}
                        onChange={this.props.handleChange}
                    />
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        id='email'
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        id='password'
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                    <Form.Control 
                        type='password'
                        placeholder='Confirm Password'
                        id='passwordConfirm'
                        value={this.props.passwordConfirm}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group className='welcome-register'>
                    <Form.Control
                        as='select'
                        id='role'
                        value={this.props.role}
                        onChange={this.props.handleChange}
                    >
                        <option value=''>Select Role</option>
                        <option value='clients'>Client</option>
                        <option value='managers'>Manager</option>
                        <option value='programmers'>Programmer</option>
                    </Form.Control>
                    {this.props.role !== ''?
                        <Col className='welcome-register-popup'>
                            {this.props.role === 'client' ?
                                <Form.Group>
                                    <Form.Label>Please select a company below</Form.Label>
                                    <Form.Control
                                        as='select'
                                        id='clientIndex'
                                        value={this.props.clientIndex}
                                        onChange={this.props.handleChange}
                                    >
                                        <option value={null}>Select Company</option>
                                        {this.props.clients.map(client => (
                                            <option>{client.name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            :
                                <Form.Group>
                                    <Form.Label>Please enter Red Thread passcode</Form.Label>
                                    <Form.Control
                                        type='password'
                                    />
                                </Form.Group>
                            }
                        </Col>
                    :
                        <div></div>
                    }
                </Form.Group>
                <Button variant='success' className='welcome-register' onClick={this.props.handleRegister}>Submit</Button>
                <Button variant='link' className='welcome-register' onClick={()=> this.props.handleDirect('session','signin')}>Cancel</Button>
            </Form>
        )
    }
}
class WelcomeSession extends React.Component {
    render() {
        return (
            <div className='welcome-content' id='welcome-session'>
                {this.props.session === 'signin' ? 
                    <WelcomeSignIn
                        // states
                        email={this.props.email}
                        username={this.props.username}
                        password={this.props.password}
                        passwordConfirm={this.props.passwordConfirm}
                        role={this.props.role}
                        errors={this.props.errors}
                        // functions
                        handleChange={this.props.handleChange}
                        handleDirect={this.props.handleDirect}
                        handleSignin={this.props.handleSignin}
                        handleState={this.props.handleState}
                    />
                :
                    <WelcomeRegister
                        // state
                        firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        username={this.props.username}
                        email={this.props.email}
                        password={this.props.password}
                        passwordConfirm={this.props.passwordConfirm}
                        role={this.props.role}
                        errors={this.props.errors}
                        clients={this.props.clients}
                        clientIndex={this.props.clientIndex}
                        // functions
                        handleChange={this.props.handleChange}
                        handleDirect={this.props.handleDirect}
                        handleRegister={this.props.handleRegister}
                        handleState={this.props.handleState}
                    />
                }
            </div>
        )
    }
}
export default WelcomeSession