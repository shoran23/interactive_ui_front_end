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
    render() {
        return (
            <div id='create-project-current-slide'>
                <div className='create-project-current-slide-col'>left</div>
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
                            <Button onClick={()=> this.props.increaseInnerArray('slides',this.props.currentSlide,'notes','')}>+</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className='create-project-current-slide-col'>right</div>
            </div>
        )
    }
}
export default CurrentSlide