import React from 'react';

import eventData from '../../assets/event-data';

import EventItem from '../event-item/event-item.component';

class EventList extends React.Component {
    constructor() {
        super();

        this.state = {
            eventList: eventData
        }

    }

    render() {
        console.log(this.state.eventList)
        return (
            <div>
                {
                    this.state.eventList.map(({ id, ...otherPropsItem }) => {
                        return <EventItem key={id} {...otherPropsItem} />
                    })
                }
            </div>
        )
    }
}

export default EventList;