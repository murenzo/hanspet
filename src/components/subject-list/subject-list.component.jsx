import React from 'react';

import subjectData from '../../assets/subject-data';

import FormSearch from '../default/FormSearch';
import SubjectItem from '../subject-item/subject-item.component';

class SubjectList extends React.Component {
    constructor() {
        super();
        this.state = {
            subjectList: subjectData,
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

                <div>
                    <FormSearch type={1} onChange={this.onSearchInputs} onInputResults={this.state.searchResults} onSelectedSearch={this.onSelectedSearch} />
                </div>
                <div className="bt br bb bl w-100">
                    {
                        this.state.subjectList.map(({ id, name, subtopics }) => {
                            return <SubjectItem key={id} name={name} subtopics={subtopics} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SubjectList;