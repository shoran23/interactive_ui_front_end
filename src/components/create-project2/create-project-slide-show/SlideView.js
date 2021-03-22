import React from 'react'

class Slide extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.currentSlide?
                    <div className='create-project-slide-active' onClick={()=> this.props.handleChange('currentSlide',this.props.index)}>{this.props.slide.title}</div>
                :
                    <div className='create-project-slide-inactive' onClick={()=> this.props.handleChange('currentSlide',this.props.index)}>{this.props.slide.title}</div>
            }
            </React.Fragment>
        )
    }
}
class SlideView extends React.Component {
    render() {
        return (
            <div id='create-project-slide-view'>    
                {this.props.slides.map((slide,index) => (
                    <Slide
                        // states
                        key={index}
                        slide={slide}
                        index={index}
                        currentSlide={this.props.currentSlide}
                        // functions
                        handleChange={this.props.handleChange}
                    />
                ))}
            </div>
        )
    }
}
export default SlideView