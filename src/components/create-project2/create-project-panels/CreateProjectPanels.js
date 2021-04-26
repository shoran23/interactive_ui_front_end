import React from 'react'
import Button from 'react-bootstrap/Button'
import CreateProjectPanel from './CreateProjectPanel'

class CreateProjectPanels extends React.Component {
    state = {
        make: '',
        model: '',
        disableModels: true,
        name: '',

        panels: [
            {name: '', make: '', model: '', disableModels: true}
        ]
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleIndexChange = (index,key,value) => {
        let panels = this.state.panels  
        panels[index][key] = value
        this.setState({panels})
    }
    handleAddPanel = () => {
        let panels = this.state.panels
        panels.push({name: '', make: '', models: '', disableModels: true})
        this.setState({panels})
    }
    handleDeletePanel = (index) => {
        let panels = this.state.panels
        panels.splice(index,1)
        this.setState({panels})
    }
    render() {
        return (
            <div id='create-project-panels'>
                <div id='create-project-panels-header'>
                    <h5>Project Panels</h5>
                    <Button onClick={this.handleAddPanel}>Add Panel</Button>
                </div>
                {this.state.panels.map((panel,index) => (
                    <CreateProjectPanel
                        // states
                        key={index}
                        index={index}
                        panel={panel}
                        availablePanels={this.props.availablePanels}
                        // functions
                        handleIndexChange={this.handleIndexChange}
                        createMakeList={this.createMakeList}
                        returnModels={this.returnModels}
                        handleDeletePanel={this.handleDeletePanel}
                    />
                ))}
            </div>
        )
    }
    componentDidMount() {
        this.props.handleGetPanels()
    }
}
export default CreateProjectPanels