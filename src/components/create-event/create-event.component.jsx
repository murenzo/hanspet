import React from 'react';

import ImageField from '../default/ImageField';

class CreateEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            eventName: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ eventName: '', startDate: '', endDate: '', description: '' })
    }

    render() {
        return (
            <div className='mw7 center'>
                <h2>Create Event</h2>
                <form className="form-block" onSubmit={this.handleSubmit}>
                    <input type="text" name='eventName' onChange={this.handleChange} placeholder='Event name' />

                    <div className="form-inline">
                        <ImageField name='startDate' onChange={this.handleChange} placeholder='Start date' type="date" />
                    </div>

                    <div className="form-inline">
                        <ImageField name='endDate' onChange={this.handleChange} placeholder='End date' type="date" />
                    </div>

                    <ImageField name='description' onChange={this.handleChange} placeholder="Description" tag="t" />

                    <button className="btn btn-primary" type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default CreateEvent;