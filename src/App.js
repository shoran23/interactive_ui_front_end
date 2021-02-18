import React from 'react'
import './App.css'
import Welcome from './components/welcome/Welcome.js'
import Dashboard from './components/dashboard/Dashboard.js'

class App extends React.Component {
    state = {
        login: false,
    }
    setTitle = newTitle => {
        document.title = newTitle
    }
    render() {
        return (
            <div className="App">
                {this.state.login ?
                    <Welcome
                        // functions
                        setTitle={this.setTitle}
                    />
                :
                    <Dashboard
                        // functions
                        setTitle={this.setTitle}
                    />
                }

            </div>
        )
    }
}
export default App;
