import React from 'react'
import './App.css'
import Welcome from './components/welcome/Welcome.js'
import ClientDashboard from './components/client-dashboard/ClientDashboard.js'

// consider using react router to handle some of the routing, including welcome, dashbord and signup

class App extends React.Component {
    state = {
        login: true,
        userRole: 'client',
    }
    setTitle = newTitle => {
        document.title = newTitle
    }
    render() {
        return (
            <div className="App">
                {!this.state.login ?
                    <Welcome
                        // functions
                        setTitle={this.setTitle}
                    />
                :
                    <React.Fragment>
                        <ClientDashboard
                            // functions
                            setTitle={this.setTitle}
                        />
                    </React.Fragment>
                }

            </div>
        )
    }
}
export default App;
