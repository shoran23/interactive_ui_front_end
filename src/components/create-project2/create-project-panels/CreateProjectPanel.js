import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateProjectPanel extends React.Component {
    handleLocalChange = e => {
        this.props.handleIndexChange(this.props.index,e.target.name,e.target.value)
    }
    createMakeList = (panels) => {
        let list = []
        for(let panel of this.props.availablePanels) {
            if(list.includes(panel.make) === false) {
                list.push(panel.make) 
            }
        }
        return (
            <React.Fragment>
                <option key={-1} value=''>Select Make</option>
                {list.map((make,index) => (
                    <option key={index} value={make}>{make}</option>
                ))}
            </React.Fragment>
        )
    }
    returnModels = (make) => {
        let models = []
        let disableModels = false
        if(make === '') {
            disableModels = true
        } else {
            for(let panel of this.props.availablePanels) {
                if(panel.make === make) {
                    models.push(panel.model)
                }
            }
        }
        if(this.props.panel.disableModels !== disableModels) {
            this.props.handleIndexChange(this.props.index,'disableModels',disableModels)
        }
        return (
            <React.Fragment>
                <option key={-1} value=''>Select Model</option>
                {models.map((model,index) => (
                    <option key={index} value={model}>{model}</option>
                ))}
            </React.Fragment>
        )
    }
    render() {
        return (
            <Form className='create-project-panels-form'>
                <Form.Group className='create-project-panels-group'>
                    <Form.Label>Panel Name</Form.Label>
                    <Form.Control
                        type='text'
                        className='create-project-panel-name'
                        name='name'
                        value={this.props.panel.name}
                        onChange={this.handleLocalChange}
                    />
                </Form.Group>
                <Form.Group className='create-project-panels-group'>
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        as='select'
                        className='create-project-panel-make'
                        name='make'
                        value={this.props.panel.make}
                        onChange={this.handleLocalChange}
                    >
                        {this.createMakeList(this.props.availablePanels)}
                    </Form.Control>
                </Form.Group>
                <Form.Group className='create-project-panels-group'>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        as='select'
                        className='create-project-panel-model'
                        disabled={this.props.panel.disableModels}
                        name='model'
                        value={this.props.panel.model}
                        onChange={this.handleLocalChange}
                    >
                        {this.returnModels(this.props.panel.make)}
                    </Form.Control>
                </Form.Group>
                <Button onClick={()=> this.props.handleDeletePanel(this.props.index)}>Remove</Button>
            </Form>        
        )
    }
}
export default CreateProjectPanel