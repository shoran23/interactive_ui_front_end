import React from 'react'
import './App.css'
import Welcome from './components/welcome/Welcome.js'
import Dashboard from './components/dashboard/Dashboard.js'

// consider using react router to handle some of the routing, including welcome, dashbord and signup

class App extends React.Component {
    state = {
        login: false,
        userProfile: {},
        user: {},
        token: '',
    }
    setTitle = newTitle => {
        document.title = newTitle
    }
    handleState = (key,value) => {
        this.setState({[key]: value})
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
            this.setState({token: ''})
            this.setState({login: false})
        })
    }  
    render() {
        return (
            <div className="App">
                {!this.state.login ?
                    <Welcome
                        // states
                        token={this.state.token}
                        user={this.state.user}
                        // functions
                        setTitle={this.setTitle}
                        handleState={this.handleState}
                    />
                :
                    <React.Fragment>
                        <Dashboard
                            // states
                            user={this.state.user}
                            userProfile={this.state.userProfile}
                            // functions
                            setTitle={this.setTitle}
                            handleSignout={this.handleSignout}
                            handleState={this.handleState}
                        />
                    </React.Fragment>
                }

            </div>
        )
    }
}
export default App;
