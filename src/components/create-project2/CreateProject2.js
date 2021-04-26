import React from 'react'
import './create-project2.css'
import CreateProjectForm from './create-project-form/CreateProjectForm'
import CreateProjectPanels from './create-project-panels/CreateProjectPanels'
import CreateProjectSlideShow from './create-project-slide-show/CreateProjectSlideShow'
import CreateProjectDemo from './create-project-demo/CreateProjectDemo'
import {apiPost} from './../../api/apiPost'
import {apiGet} from './../../api/apiGet'

class CreateProject2 extends React.Component {
    state = {
        customer: '',
        name: 'test',
        projectNumber: null,
        orderNumber: null,
        clients: [{}],
        programmers: [{}],
        managers: [{}],
        status: 'Ready for Review',
        project_type: '',
        panels: [],
        clientList: [],
        programmerList: [],
        managerList: [],
        slideShow: {
            slides: [{
                title: '',
                image: null,
                notes: [''],
                comments: [],
                questions: [],
            }]
        },
        currentSlide: 0,
        availablePanels: []
    }
    /* MANAGE STATES ******************************************************************************************/ 
    handleChange = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    handleChangeDirect = (key,value) => {
        this.setState({[key]: value})
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
    /* MANAGE SLIDE SHOW ***************************************************************************************/
    handleSlideShowChange = e => {
        let slideShow = this.state.slideShow
        slideShow[e.target.id] = e.target.value
        this.setState({slideShow})
    }
    handleSlideShowSlideChange = index => e => {
        let slideShow = this.state.slideShow
        slideShow.slides[index][e.target.id] = e.target.value
        this.setState({slideShow})
    }
    handelSlideShowSlideChangeDirect = (index,key,value) => {
        let slideShow = this.state.slideShow
        slideShow.slides[index][key] = value
        this.setState({slideShow})
    }
    handleSlideShowSlideInnerChange = (index,key,innerIndex,value) => {
        let slideShow = this.state.slideShow
        slideShow.slides[index][key][innerIndex] = value
        this.setState({slideShow})
    }
    handleSlideShowSlideRemove = index => e => {
        let slideShow = this.state.slideShow
        slideShow.slides.splice(index,1)
        this.setState({slideShow})
    }
    handleSlideShowSlideIncrease = () => {
        let slideShow = this.state.slideShow
        slideShow.slides.push({title: '', notes: [''], image: null, comments: [''], questions: ['']})
        this.setState({slideShow})
    }
    handleSlideShowSlideNoteIncrease = index => {
        let slideShow = this.state.slideShow
        slideShow.slides[index].notes.push('')
        this.setState({slideShow})
    }
    /* MANAGE REQUESTS *****************************************************************************************/
    handleGetUserLists = () => {
        let clientList = []
        let programmerList = []
        let managerList = []
        apiGet('http://localhost:','8000','/api/v1/user_profiles')
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
        .then(users => console.log('users = ',users))
    }
    handleGetPanels = () => {
        apiGet('http://localhost:','8000','/api/v1/panels/')
        .then(resJson => this.setState({availablePanels: resJson}))
    }
    handlePostProject = () => {
        let body = {
            name: this.state.name,
            order_number: this.state.orderNumber,
            managers: this.state.managers,
            clients: this.state.clients,
            project_type: this.state.project_type,
            panels: this.state.panels,
            status: this.state.status,
        }
        apiPost('http://localhost:','8000','/api/v1/projects/',body)
        .then(res => console.log(res))
        // .then(resJson => {
        //     if(this.state.project_type === 'Slide Show') {
        //         this.handlePostSlideShow(key,resJson.id)
        //     }
        // })
        .catch(err => {
            console.log('err = ',err)
        })
    }

    handlePostSlideShow = (key,projectId) => {
        fetch('http://localhost:8000/api/v1/slide_shows/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
            },
            method: 'POST',
            body: JSON.stringify({
                project: projectId,
                slideShow: this.state.slideShow
            })
        })
        .then(res => res.json())
        .then(resJson => console.log(resJson))
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
                    handleState={this.props.handleState}
                    handleChange={this.handleChange}
                    handleArrayChange={this.handleArrayChange}
                    handleArrayRemove={this.handleArrayRemove}
                    increaseArray={this.increaseArray}
                    handlePostProject={this.handlePostProject}
                />
                <CreateProjectPanels
                    // states
                    availablePanels={this.state.availablePanels}
                    // functions
                    handleGetPanels={this.handleGetPanels}
                />
                {this.state.project_type != '' ?
                    <div id='create-project-area'>
                        {this.state.project_type === 'Slide Show' ?
                            <CreateProjectSlideShow
                                // states
                                slideShow={this.state.slideShow}
                                currentSlide={this.state.currentSlide}
                                // functions
                                handleChange={this.handleChange}
                                handleChangeDirect={this.handleChangeDirect}
                                handleSlideShowChange={this.handleSlideShowChange}
                                handelSlideShowSlideChangeDirect={this.handelSlideShowSlideChangeDirect}
                                handleSlideShowSlideInnerChange={this.handleSlideShowSlideInnerChange}
                                handleSlideShowSlideChange={this.handleSlideShowSlideChange}
                                handleSlideShowSlideRemove={this.handleSlideShowSlideRemove}
                                handleSlideShowSlideIncrease={this.handleSlideShowSlideIncrease}
                                handleSlideShowSlideNoteIncrease={this.handleSlideShowSlideNoteIncrease}
                            />
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