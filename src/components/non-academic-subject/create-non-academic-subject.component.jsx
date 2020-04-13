import React from 'react';

import ImageField from '../default/ImageField';

class CreateNonAcademicSubject extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: ''
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

        this.setState({ name: '', description: '' })
    }

    render() {
        return (
            <div className='mw7 center'>
                <h2>Add Non-Academic Subject</h2>
                <form className="form-block" onSubmit={this.handleSubmit}>

                    <div className="form-block">
                        <ImageField name='name' onChange={this.handleChange} placeholder="Subject name" />
                    </div>

                    <div className="form-block">
                        <ImageField name='description' onChange={this.handleChange} placeholder="Description" />
                    </div>

                    <button className="btn btn-primary" type='submit'>
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateNonAcademicSubject;