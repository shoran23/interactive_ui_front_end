import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import WelcomeMessage from './WelcomeMessage'
import WelcomeSignIn from './WelcomeSignin'
import WelcomeFooter from './WelcomeFooter'
import './welcome.css'

class Welcome extends React.Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    render() {
        return (
            <div className='welcome'>
                <WelcomeHeader/>
                <WelcomeMessage/>
                <WelcomeSignIn
                    // states
                    email={this.state.email}
                    passworld={this.state.password}
                    // functions
                    handleChange={this.handleChange}
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