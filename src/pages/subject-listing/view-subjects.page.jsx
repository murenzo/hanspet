import React from 'react';

import FormSearch from '../../components/default/FormSearch';
import SubjectList from '../../components/subject-list/subject-list.component';

class ViewSubject extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: []
        }
    }

    onSearchInputs = (value) => {

    }

    onSelectedSearch = (id, value) => {

    }

    render() {
        return (
            <div>
                <h2 className="tc"> Academic Subject List</h2>

                <FormSearch type={1} onChange={this.onSearchInputs} onInputResults={this.state.searchResults} onSelectedSearch={this.onSelectedSearch} />

                <SubjectList />

            </div>
        )
    }
}


export default ViewSubject;