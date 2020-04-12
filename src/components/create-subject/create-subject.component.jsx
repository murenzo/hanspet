import React from 'react';

import ImageField from '../default/ImageField';

class CreateSubject extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            level: '',
            faculty: '',
            topic: '',
            subtopics: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ name: '', description: '', level: '', faculty: '', topic: '', subtopics: '' })
    }

    render() {

        const { name, description, level, faculty, topic, subtopics } = this.state;

        return (
            <div className='mw7 center'>
                <h2>Create Academic Subject</h2>

                <form className="form-block" onSubmit={this.handleSubmit}>
                    <div className="form-block">
                        <ImageField name='name' value={name} onChange={this.handleChange} placeholder="Subject name" />
                    </div>

                    <div className="form-block">
                        <ImageField name='description' value={description} onChange={this.handleChange} placeholder="Description" />
                    </div>

                    <div className='form-inline'>
                        <ImageField name='level' value={level} onChange={this.handleChange} tag="s">
                            <option value="">Select level</option>
                            <option value="Junior">Junior</option>
                            <option value="Secondary">Secondary</option>
                        </ImageField>
                    </div>

                    <div className='form-inline'>
                        <ImageField name='faculty' value={faculty} onChange={this.handleChange} tag="s">
                            <option value="">Select faculty</option>
                            <option value="Art">Art</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Science">Science</option>
                        </ImageField>
                    </div>

                    <div className="form-block">
                        <ImageField name='topic' value={topic} onChange={this.handleChange} placeholder="Subject topic" />
                    </div>

                    <div className="form-block">
                        <ImageField name='subtopics' value={subtopics} onChange={this.handleChange} placeholder="Subject topic" tag="t" />
                    </div>

                    <button className="btn btn-primary" type='submit'>
                        Add Subject
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateSubject;