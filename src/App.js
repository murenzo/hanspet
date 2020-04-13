import React, { Component } from 'react';
import './App.css';

import CreateEvent from './components/create-event/create-event.component';
import EventList from './components/event-list/event-list.component';
import EventCard from './components/event-item/event-item.component';
import CreateSubject from './components/create-subject/create-subject.component';
import ViewSubject from './pages/subject-listing/view-subjects.page';
import SubjectUpload from './pages/subject-upload/subject-upload.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sabith Raji'
    }
  }
  render() {
    return (
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <SubjectUpload />
          {/* <CreateSubject /> */}
          {/* <EventList /> */}
          {/* <CreateEvent /> */}
          {/* <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard /> */}
        </div>
      </div>
    );
  }
}

export default App;
