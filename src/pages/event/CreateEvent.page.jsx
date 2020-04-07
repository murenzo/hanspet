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
                        <ImageField onChange={this.onStartDateChange} src={1} type="date"/>
                    </div>
                        
                    <div className="form-inline">
                        <ImageField onChange={this.onEndDateChange} src={1} type="date"/>
                    </div>

                    <ImageField onChange={this.onDescriptionChange} src={1} placeholder="Description" tag="t"/>
                </form>
            </div>
        )
    }
}

export default CreateEvent;