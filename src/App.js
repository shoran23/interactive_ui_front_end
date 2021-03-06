import React from 'react'
import './App.css'
import Welcome from './components/welcome/Welcome.js'
import Dashboard from './components/dashboard/Dashboard.js'

// consider using react router to handle some of the routing, including welcome, dashbord and signup

class App extends React.Component {
    state = {
        login: false,
        userRole: 'client',
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
        console.log(this.state.token)
        return (
            <div className="App">
                {!this.state.login ?
                    <Welcome
                        // states
                        token={this.state.token}
                        // functions
                        setTitle={this.setTitle}
                        handleState={this.handleState}
                    />
                :
                    <React.Fragment>
                        <Dashboard
                            // functions
                            setTitle={this.setTitle}
                            handleSignout={this.handleSignout}
                        />
                    </React.Fragment>
                }

            </div>
        )
    }
}
export default App;
