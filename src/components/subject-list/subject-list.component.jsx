import React from 'react';

import subjectData from '../../assets/subject-data';
import SubjectItem from '../subject-item/subject-item.component';

class SubjectList extends React.Component {
    constructor() {
        super();
        this.state = {
            subjectList: subjectData
        }
    }


    render() {
        return (
            <div className="ba">
                {
                    this.state.subjectList.map(({ id, name, subtopics }) => {
                        return <SubjectItem key={id} name={name} subtopics={subtopics} />
                    })
                }
            </div>
        )
    }
}

export default SubjectList;