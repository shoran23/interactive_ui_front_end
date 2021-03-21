import React from 'react'
import './create-project-slide-show.css'
import SlideView from './SlideView'
import CurrentSlideOptions from './CurrentSlideOptions'
import CurrentSlide from './CurrentSlide'
import Button from 'react-bootstrap/Button'

class CreateProjectSlideShow extends React.Component {
    state = {
        slides: [{title: 'Welcome'},{title: 'Gettings Started'},{title: 'Presentation'},{title: 'Audio Conference'},{title: 'Audio Conference - Incoming Call'}],
        currentSlide: null,
    }
    increaseArray = (key,value) => {
        let array = this.state[key]
        array.push(value)
        this.setState({[key]: array})
    }
    render() {
        return (
            <div id='create-project-slide-show'>
                <div id='create-project-create-new-slide-container'><Button onClick={()=> this.increaseArray('slides',{title: ''})}>Create New Slide</Button></div>
                <SlideView
                    // states
                    slides={this.state.slides}
                    // functions
                />
                <CurrentSlideOptions
                
                />
                <CurrentSlide
                
                />
            </div>
        )
    }
}
export default CreateProjectSlideShow