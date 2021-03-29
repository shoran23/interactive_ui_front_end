import React from 'react'
import './create-project-slide-show.css'
import SlideView from './SlideView'
import CurrentSlide from './CurrentSlide'
import Button from 'react-bootstrap/Button'

class CreateProjectSlideShow extends React.Component {
    render() {
        return (
            <div id='create-project-slide-show'>
                <div id='create-project-create-new-slide-container'>
                    <Button onClick={this.props.handleSlideShowSlideIncrease}>Create New Slide</Button>
                </div>
                {this.props.slideShow.slides.length > 1 ?
                    <SlideView
                        // states
                        slides={this.props.slideShow.slides}
                        currentSlide={this.props.currentSlide}
                        // functions
                        handleChange={this.props.handleChange}
                        handleChangeDirect={this.props.handleChangeDirect}
                    />
                :
                    <React.Fragment></React.Fragment>
                }
                <CurrentSlide
                    // states
                    slides={this.props.slideShow.slides}
                    currentSlide={this.props.currentSlide}
                    // function
                    handleChange={this.props.handleChange}
                    handleChangeDirect={this.props.handleChangeDirect}
                    handleSlideShowChange={this.props.handleSlideShowChange}
                    handelSlideShowSlideChangeDirect={this.props.handelSlideShowSlideChangeDirect}
                    handleSlideShowSlideInnerChange={this.props.handleSlideShowSlideInnerChange}
                    handleSlideShowSlideChange={this.props.handleSlideShowSlideChange}
                    handleSlideShowSlideRemove={this.props.handleSlideShowSlideRemove}
                    handleSlideShowSlideIncrease={this.props.handleSlideShowSlideIncrease}
                    handleSlideShowSlideNoteIncrease={this.props.handleSlideShowSlideNoteIncrease}
                />
            </div>
        )
    }
}
export default CreateProjectSlideShow