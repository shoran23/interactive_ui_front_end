import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import WelcomeMessage from './WelcomeMessage'
import WelcomeSession from './WelcomeSession'
import WelcomeFooter from './WelcomeFooter'
import './welcome.css'

class Welcome extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        session: 'signin',
        role: '',
        error: 'testing error',
        clients: [
            {name: 'MIT Sloan'},
            {name: 'Full Stack Academey'},
            {name: 'ADP'},
            {name: 'ESPN'},
            {name: 'TJX'}
        ],
        clientIndex: null,
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    handleDirect = (key,value) => {
        this.setState({[key]: value})
    }
    handleError = err => {
        let errObj = JSON.parse(err)
        let keys = Object.keys(errObj)
        let values = []

        for(let key of keys) {
            values.push(errObj[key][0])
        }
        console.log(keys)
        console.log(values)
    }
    handleRegister = () => {
        fetch('http://localhost:8000/api/v1/dj-rest-auth/registration/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify ({
                username: this.state.username,
                email: this.state.email,
                password1: this.state.password,
                password2: this.state.passwordConfirm
            }) 
        })
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
        })
    }
    handleSignin = () => {
        fetch('http://localhost:8000/api/v1/dj-rest-auth/login/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify ({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => {
            if(!res.ok) {
                throw res
            } else {
                return res.json()
            }
        })
        .then(resJson => {
            console.log(resJson)
        })
        .catch(err => {
            err.text()
            .then(errText => {
                this.handleError(errText)
            })
        })
    }
    handleSignout = () => {
        fetch('http://localhost:8000/api/v1/dj-rest-auth/logout/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
        })
    }
    render() {
        return (
            <div className='welcome'>
                <WelcomeHeader/>
                <WelcomeMessage/>
                <WelcomeSession
                    // states
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    username={this.state.username}
                    email={this.state.email}
                    passworld={this.state.password}
                    passwordConfirm={this.state.passwordConfirm}
                    session={this.state.session}
                    role={this.state.role}
                    clients={this.state.clients}
                    clientIndex={this.state.clientIndex}
                    error={this.state.error}
                    // functions
                    handleChange={this.handleChange}
                    handleDirect={this.handleDirect}
                    handleRegister={this.handleRegister}
                    handleSignin={this.handleSignin}
                    handleSignout={this.handleSignout}
                />
                <WelcomeFooter/>
            </div>
        )
    }
    componentDidMount() {
        this.props.setTitle('Welcome To Interactive UI')
    }
}
export default Welcome