import React from 'react'
import Form from 'react-bootstrap/Form'
import ImageUploader from 'react-images-upload'
import Button from 'react-bootstrap/Button'

class CurrentSlide extends React.Component {
    handleNote = e => {
        let idArray = e.target.id.split(' ')
        let id = idArray[0]
        let index = idArray[1]

        console.log('id  = ',id)
        console.log('index = ',index)
        console.log('e.target.value = ',e.target.value)


        this.props.handleSlideShowSlideInnerChange(this.props.currentSlide,id,index,e.target.value) 
    }
    handleCurrentSlide = action => {
        if(action === 'increase') {
            if(this.props.currentSlide < this.props.slides.length - 1) {
                this.props.handleChangeDirect('currentSlide',this.props.currentSlide + 1)
            }
        } else {
            if(this.props.currentSlide > 0) {
                this.props.handleChangeDirect('currentSlide',this.props.currentSlide - 1)
            }
        }
    }
    handleImageUpload = (image) => {
        this.props.handelSlideShowSlideChangeDirect(this.props.currentSlide,'image',URL.createObjectURL(image[0]))
    }
    render() {
        return (
            <div id='create-project-current-slide'>
                <div className='create-project-current-slide-col'>
                    {this.props.slides.length > 1 ?
                        <div id='create-project-current-slide-left-arrow' onClick={()=> this.handleCurrentSlide('decrease')}></div>  
                    :
                        <React.Fragment></React.Fragment>
                    }
                </div>
                <div className='create-project-current-slide-col'>
                    <Form id='create-project-current-slide-form'>
                        <Form.Group id='create-proejct-current-slide-form-group'>
                            <Form.Control
                                className='create-proejct-current-slide-title'
                                type='text'
                                placeholder='Enter Title'
                                id='title'
                                value={this.props.slides[this.props.currentSlide].title}
                                onChange={this.props.handleSlideShowSlideChange(this.props.currentSlide)}
                            />
                            <div id='create-project-current-slide-form-image-container'>
                                {this.props.slides[this.props.currentSlide].image === null ?
                                    <ImageUploader
                                        id = 'create-project-current-slide-form-image-loader'
                                        withIcon={true}
                                        buttonText='Choose images'
                                        onChange={this.handleImageUpload}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                    />
                                :
                                    <div id='create-project-current-slide-form-image-object'>
                                        <Button variant='danger' onClick={()=> this.props.handelSlideShowSlideChangeDirect(this.props.currentSlide,'image',null)}>Remove</Button>
                                        <img id='create-project-current-slide-form-image' src={this.props.slides[this.props.currentSlide].image}/>
                                    </div>
                                }
                            </div>
                            <div id='create-project-current-slide-notes-list-container'> 
                                <div id='create-project-current-slide-notes-list-header'>
                                    <div id='create-project-current-slide-note-list-view-options'>
                                        
                                    </div>
                                    <Button onClick={()=> this.props.handleSlideShowSlideNoteIncrease(this.props.currentSlide)}>Add Note</Button>
                                </div>
                                <ul id='create-project-current-slide-notes-list'>
                                    {this.props.slides[this.props.currentSlide].notes.map((note,index) => (
                                        <li className='create-project-current-slide-note'> 
                                            <Form.Control
                                                as='textarea'
                                                id={`notes ${index}`}
                                                value={note}
                                                onChange={this.handleNote}
                                            />
                                            <Button variant='link' onClick={()=> this.props.handleSlideShowSlideRemove(this.props.currentSlide)}>Remove</Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
                <div className='create-project-current-slide-col'>
                    {this.props.slides.length > 1 ?
                        <div id='create-project-current-slide-right-arrow' onClick={()=> this.handleCurrentSlide('increase')}></div> 
                    :
                        <React.Fragment></React.Fragment>
                    }
                </div>
            </div>
        )
    }
}
export default CurrentSlide