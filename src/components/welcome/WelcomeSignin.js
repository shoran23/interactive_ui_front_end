import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css"

class WelcomeSignIn extends React.Component {
    render() {
        return (
            <div className='welcome-content' id='welcome-login'>
                <Form className='welcome-login-form'>
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
                        type='password'
                        placeholder='Password'
                        id='password'
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                    <Button variant='primary' className='welcome-login'>Log In</Button>
                    <Button variant='link'>Forgot Password?</Button>
                </Form>
            </div>
        )
    }
}
export default WelcomeSignIn