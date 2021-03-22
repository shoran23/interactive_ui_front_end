import React from 'react'
import './create-project-slide-show.css'
import SlideView from './SlideView'
import CurrentSlideOptions from './CurrentSlideOptions'
import CurrentSlide from './CurrentSlide'
import Button from 'react-bootstrap/Button'

class CreateProjectSlideShow extends React.Component {
    state = {
        slides: [
            {title: 'Welcome', image: '', notes: [
                'Touch the screen to begin.',
                'Once the screen is touch a page flip will be executed.'
            ]},
        ],
        currentSlide: 0,
    }
    handleChange = (key,value) => {
        this.setState({[key]: value})
    }
    handleArrayChange = (array,index,key,value) => {
        let localArray = this.state[array]
        localArray[index][key] = value
        this.setState({[array]: localArray})
    }
    handleInnerArrayChange = (array,indexOuter,key,indexInner,value) => {
        let localArray = this.state[array]
        localArray[indexOuter][key][indexInner] = value
        this.setState({[array]: localArray})
    }
    increaseArray = (key,value) => {
        let array = this.state[key]
        array.push(value)
        this.setState({[key]: array})
    }
    increaseInnerArray = (key,index,innerKey,value) => {
        let localArray = this.state[key]
        localArray[index][innerKey].push(value)
        this.setState({[key]: localArray})
    }
    render() {
        return (
            <div id='create-project-slide-show'>
                <div id='create-project-create-new-slide-container'><Button onClick={()=> this.increaseArray('slides',{title: '', image: '', notes: ['']})}>Create New Slide</Button></div>
                <SlideView
                    // states
                    slides={this.state.slides}
                    currentSlide={this.state.currentSlide}
                    // functions
                    handleChange={this.handleChange}
                />
                <CurrentSlideOptions
                
                />
                <CurrentSlide
                    // states
                    slides={this.state.slides}
                    currentSlide={this.state.currentSlide}
                    // function
                    handleArrayChange={this.handleArrayChange}
                    handleInnerArrayChange={this.handleInnerArrayChange}
                    increaseInnerArray={this.increaseInnerArray}
                />
            </div>
        )
    }
}
export default CreateProjectSlideShow