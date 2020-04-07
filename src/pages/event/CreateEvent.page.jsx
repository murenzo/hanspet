import React, { Component } from 'react';

import ImageField from '../../components/default/ImageField';

class CreateEvent extends Component {
    constructor() {
        super()
        this.state = {
            eventName: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    }

    onNameChange = (e) => {
        this.setState({ eventName: e.target.value }, () => {
            console.log(this.state.eventName)
        })
    }

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value}, () => {
            console.log(this.state.description)
        })
    }

    onStartDateChange = (e) => {
        this.setState({ startDate: e.target.value}, () => {
            console.log(this.state.startDate)
        })
    }

    onEndDateChange = (e) => {
        this.setState({ endDate: e.target.value}, () => {
            console.log(this.state.endDate)
        })
    }

    render() {
        return (
            <div className='container'>
                <h2>Create Event</h2>
                <form className="form-block">
                    <input type="text" onChange={this.onNameChange} placeholder='Event name'/>

                    <div className="form-inline">
                        <ImageField onChange={this.onStartDateChange} placeholder='Start date' type="date"/>
                    </div>
                        
                    <div className="form-inline">
                        <ImageField onChange={this.onEndDateChange} placeholder='End date' type="date"/>
                    </div>

                    <ImageField onChange={this.onDescriptionChange} placeholder="Description" tag="t"/>
                    <button className="btn btn-primary" type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateEvent;