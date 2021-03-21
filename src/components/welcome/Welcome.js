import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import WelcomeMessage from './WelcomeMessage'
import WelcomeSession from './WelcomeSession'
import WelcomeFooter from './WelcomeFooter'
import './welcome.css'
import Cookies from 'universal-cookie'; 

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
        errors: [],
        companies: [],
        clientIndex: null,
        user: {},
        userRole: '',
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
        this.setState({errors: values})
    }
    clearCredentials = () => {
        const states = ['firstName','lastName','username','email','password','passwordConfirm']
        states.map(state => {
            this.setState({[state]: ''})
        })
    }
    /* HANDLE REQUESTS ***********************************************************************************/
    continueLogin = () => {
        // get the key from cookies
        const cookies = new Cookies();
        const key = cookies.get('key')
        let thisUser = {}
        // fetch all users
        fetch('http://localhost:8000/api/v1/users', {
            headers: {
                "Accept": 'application/json',
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
            // find user object that matches the provided credentials
            let users = resJson
            this.props.handleState('users',users)
            for(let user of users) {
                if(user.username === this.state.username) {
                    thisUser = user
                }
            }
            // get user profile
            fetch('http://localhost:8000/api/v1/user_profiles', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + key 
                }
            })
            .then(resProfile => {
                if(!resProfile.ok) {
                    throw resProfile
                } else {
                    return resProfile.json()
                }
            })
            .then(profiles => {
                for(let profile of profiles) {
                    if(thisUser.id === profile.user) {
                        this.props.handleState('userProfile',profile)
                        this.props.handleState('user',thisUser)
                        this.props.handleState('login',true)
                    }
                }
            })
        })
    }
    handleCreateUserProfile = key => {
        fetch('http://localhost:8000/api/v1/users', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
            }
        })
        .then(res => res.json())
        .then(resJson => {
            let users = resJson
            let id = null
            for(let user of users) {
                if(user.username === this.state.username) {
                    this.props.handleState('user',user)
                    id = user.id
                    break;
                }
            }
            fetch('http://localhost:8000/api/v1/user_profiles/', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + key
                },
                method: 'POST',
                body: JSON.stringify ({
                    user: id,
                    role: this.state.role,
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                })
            })
            .then(res => {
                if(res.ok) {
                    fetch(`http://localhost:8000/api/v1/users/${id}/`, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Token ' + key
                        },
                        method: 'PATCH',
                        body: JSON.stringify ({
                            first_name: this.state.firstName,
                            last_name: this.state.lastName
                        })
                    })
                    .then(res => {
                        if(res.ok) {
                            this.continueLogin()
                        }
                    })
                }
            }) 
        })
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
        .then(res => {
            if(!res.ok) {
                throw res
            } else {
                return res.json()
            }
        })
        .then(resJson => {
            this.setState({errors: []})
            const cookies = new Cookies();
            cookies.set('key', resJson.key, { path: '/' });
            this.handleCreateUserProfile(resJson.key)
            this.props.handleState('login',true)
        })
        .catch(err => {
            err.text()
            .then(errText => {
                this.handleError(errText)
            })
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
            this.setState({errors: []})
            const cookies = new Cookies()
            cookies.set('key', resJson.key, { path: '/' });
            this.continueLogin()
        })
        .catch(err => {
            err.text()
            .then(errText => {
                this.handleError(errText)
            })
        })
    }
    getCompanies = () => {
        fetch('http://localhost:8000/api/v1/companies', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Authentication': 
            },
            method: 'GET',
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
                    errors={this.state.errors}
                    user={this.props.user}
                    // functions
                    handleChange={this.handleChange}
                    handleDirect={this.handleDirect}
                    handleRegister={this.handleRegister}
                    handleSignin={this.handleSignin}
                    handleSignout={this.handleSignout}
                    handleState={this.handleState}
                    clearCredentials={this.clearCredentials}
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