import React from 'react'

class Slide extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.slide.title.length > 0 ?
                    <div className='create-project-slide'>{this.props.slide.title}</div>
                :
                    <div className='create-project-slide'></div>
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
                    />
                ))}
            </div>
        )
    }
}
export default SlideView
