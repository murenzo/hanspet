import React from 'react';

const EventCard = ({ eventName, startDate, endDate, description }) => {
    return (

        <div className="fl w-100 w-25-ns pa2 tl serif dib ba br0 ma2 bw1 shadow-2">
            <h1 className="f3 mv1 lh-copy">{eventName}</h1>
            <span className='f6 moon-gray i lh-copy'> {startDate} - {endDate} </span>
            <div>
                <p> {description} </p>
            </div>
            <div>
                <button className='btn btn-primary'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>

    )
}

export default EventCard;