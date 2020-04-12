import React from 'react';

import './subject-item.styles.css';

const SubjectItem = ({ name, subtopics }) => {
    return (
        <div className="fl w-100 w-25-ns pa2 tl serif dib ba br0 ma2 bw1 shadow-2 relative">
            <h1 className="f3 mv1 lh-copy">{name}</h1>
            <span className='f6 moon-gray i lh-copy'> {subtopics} </span>
            <div className="absolute">
                <span className='btn'>Edit</span>
                <span className='btn'>Delete</span>
            </div>
        </div>
    )
}

export default SubjectItem;