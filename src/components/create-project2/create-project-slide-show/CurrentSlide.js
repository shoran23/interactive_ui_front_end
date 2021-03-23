import React from 'react'
import Form from 'react-bootstrap/Form'
import ImageUploader from 'react-images-upload'
import Button from 'react-bootstrap/Button'

class CurrentSlide extends React.Component {
    handleTitle = e => {
        this.props.handleArrayChange('slides',this.props.currentSlide,e.target.id,e.target.value)
    }
    handleNote = e => {
        let idArray = e.target.id.split(' ')
        let id = idArray[0]
        let index = idArray[1]
        this.props.handleInnerArrayChange('slides',this.props.currentSlide,id,index,e.target.value) 
    }
    handleNoteEnter = e => {
        if(e.keyCode === 13) {
            this.props.increaseInnerArray('slides',this.props.currentSlide,'notes','')
        }
    }
    handleCurrentSlide = action => {
        if(action === 'increase') {
            if(this.props.currentSlide < this.props.slides.length - 1) {
                this.props.handleChange('currentSlide',this.props.currentSlide + 1)
            }
        } else {
            if(this.props.currentSlide > 0) {
                this.props.handleChange('currentSlide',this.props.currentSlide - 1)
            }
        }
    }
    render() {
        console.log('current slide = ',this.props.currentSlide)
        return (
            <div id='create-project-current-slide'>
                <div className='create-project-current-slide-col'>
                    <div id='create-project-current-slide-left-arrow' onClick={()=> this.handleCurrentSlide('decrease')}></div>     
                </div>
                <div className='create-project-current-slide-col'>
                    <Form id='create-project-current-slide-form'>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                placeholder='Enter Title'
                                id='title'
                                value={this.props.slides[this.props.currentSlide].title}
                                onChange={this.handleTitle}
                            />
                            <div id='create-project-current-slide-form-image'>
                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                />
                            </div>
                            <ul>
                                {this.props.slides[this.props.currentSlide].notes.map((note,index) => (
                                    <li>
                                        <Form.Control
                                            type='text'
                                            id={`notes ${index}`}
                                            value={note}
                                            onChange={this.handleNote}
                                            onKeyDown={this.handleNoteEnter}
                                        >
                                        </Form.Control>
                                    </li>
                                ))}
                            </ul>
                        </Form.Group>
                    </Form>
                </div>
                <div className='create-project-current-slide-col'>
                    <div id='create-project-current-slide-right-arrow' onClick={()=> this.handleCurrentSlide('increase')}></div> 
                </div>
            </div>
        )
    }
}
export default CurrentSlide