import React from 'react'
import Cookies from 'universal-cookie'
import CreateProjectForm from './create-project-form/CreateProjectForm'
import './create-project2.css'
import CreateProjectSlideShow from './create-project-slide-show/CreateProjectSlideShow'
import CreateProjectDemo from './create-project-demo/CreateProjectDemo'

class CreateProject2 extends React.Component {
    state = {
        customer: '',
        name: '',
        projectNumber: null,
        orderNumber: null,
        type: '',
        clients: [],
        programmers: [{}],
        managers: [],
        clientList: [],
        programmerList: [],
        managerList: [],
    }
    /* MANAGE STATES ******************************************************************************************/ 
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    handleArrayChange = index => e => {
        let array = this.state[e.target.id]
        array[index] = e.target.value
        this.setState({[e.target.id]: array})
    }
    handleArrayRemove = (key,index) => {
        let array = this.state[key]
        array.splice(index,1)
        this.setState({[key]: array})
    }
    increaseArray = key => {
        let array = this.state[key]
        array.push(0)
        this.setState({[key]: array})
    }
    /* MANAGE REQUESTS *****************************************************************************************/
    handleGetUserLists = () => {
        let clientList = []
        let programmerList = []
        let managerList = []
        const cookies = new Cookies()
        let key = cookies.get('key')
        fetch('http://localhost:8000/api/v1/user_profiles/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
            let userProfiles = resJson
            for(let userProfile of userProfiles) {
                switch(userProfile.role) {
                    case 'Client': clientList.push(userProfile); break;
                    case 'Programmer': programmerList.push(userProfile); break;
                    case 'Manager': managerList.push(userProfile); break;
                }
            }
            this.setState({clientList})
            this.setState({programmerList})
            this.setState({managerList})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div id='create-project'>
                <CreateProjectForm
                    // states
                    customer={this.state.customer}
                    name={this.state.name}
                    projectNumber={this.state.projectNumber}
                    orderNumber={this.state.orderNumber}
                    type={this.state.type}
                    clients={this.state.clients}
                    programmers={this.state.programmers}
                    managers={this.state.managers}
                    clientList={this.state.clientList}
                    programmerList={this.state.programmerList}
                    managerList={this.state.managerList}
                    // functions
                    handleChange={this.handleChange}
                    handleArrayChange={this.handleArrayChange}
                    handleArrayRemove={this.handleArrayRemove}
                    increaseArray={this.increaseArray}
                />
                {this.state.type != '' ?
                    <div id='create-project-area'>
                        {this.state.type === 'slide-show' ?
                            <CreateProjectSlideShow/>
                        :
                            <CreateProjectDemo/>
                        }
                    </div>
                :
                    <div>
                        Select Project Type
                    </div>
                }
            </div>
        )
    }
    componentDidMount() {
        this.handleGetUserLists()
    }
}
export default CreateProject2