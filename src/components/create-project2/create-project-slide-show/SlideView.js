import React from 'react'


class Slide extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.index === this.props.currentSlide?
                    <div className='create-project-slide-active' onClick={()=> this.props.handleChangeDirect('currentSlide',this.props.index)}>
                        <h5 className='create-project-slide-title'>{this.props.slide.title}</h5>
                        <img src={this.props.slide.image}/>
                        <ul>
                            {this.props.slide.notes.map((note,index) => (
                                <li className='create-project-slide-note' key={index}>{note}</li>
                            ))}
                        </ul>
                    </div>
                :
                    <div className='create-project-slide-inactive' onClick={()=> this.props.handleChangeDirect('currentSlide',this.props.index)}>
                        <h5 className='create-project-slide-title'>{this.props.slide.title}</h5>
                        <img src={this.props.slide.image}/>
                        <ul>
                            {this.props.slide.notes.map((note,index) => (
                                <li className='create-project-slide-note' key={index}>{note}</li>
                            ))}
                        </ul>
                    </div>
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
                        handleChangeDirect={this.props.handleChangeDirect}
                    />
                ))}
            </div>
        )
    }
}
export default SlideView
