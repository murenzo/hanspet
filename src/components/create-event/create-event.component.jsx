import React from 'react';

import ImageField from '../default/ImageField';

class CreateEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
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

        this.setState({ name: '', startDate: '', endDate: '', description: '' })
    }

    render() {
        const { name, startDate, endDate, description } = this.state;

        return (
            <div className='mw7 center'>
                <h2>Create Event</h2>
                <form className="form-block" onSubmit={this.handleSubmit}>
                    <input type="text" name='name' onChange={this.handleChange} value={name} placeholder='Event name' />

                    <div className="form-inline">
                        <ImageField name='startDate' onChange={this.handleChange} value={startDate} placeholder='Start date' type="date" />
                    </div>

                    <div className="form-inline">
                        <ImageField name='endDate' onChange={this.handleChange} value={endDate} placeholder='End date' type="date" />
                    </div>

                    <ImageField name='description' onChange={this.handleChange} value={description} placeholder="Description" tag="t" />

                    <button className="btn btn-primary" type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default CreateEvent;