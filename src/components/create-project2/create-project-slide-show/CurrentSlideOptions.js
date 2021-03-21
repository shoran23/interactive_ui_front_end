import React from 'react'
import Button from 'react-bootstrap/Button'

class CurrentSlideOptions extends React.Component {
    render() {
        return (
            <div id='create-project-current-slide-options'>
                <div id='create-project-current-slide-options-divider'></div>
                <div id='create-project-current-slide-options-buttons'>
                    <Button className='create-project-current-slide-option' variant='secondary'>Edit</Button>
                    <Button className='create-project-current-slide-option' variant='secondary'>Delete</Button>
                </div>
            </div>
        )
    }
}
export default  CurrentSlideOptions