import React, { Component } from 'react';
import './App.css';

import CreateEvent from './components/create-event/create-event.component';
import EventList from './components/event-list/event-list.component';
import EventCard from './components/event-item/event-item.component';
import CreateAcademicSubject from './components/academic-subject/create-academic-subject.component';
import ViewSubject from './pages/subject-listing/view-subjects.page';
import SubjectUpload from './pages/subject-upload/subject-upload.component';
import CreateNonAcademicSubject from './components/non-academic-subject/create-non-academic-subject.component';

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
          <CreateNonAcademicSubject />
          {/* <CreateSubject /> */}
          {/* <EventList /> */}
          {/* <CreateEvent /> */}
        </div>
      </div>
    );
  }
}

export default App;
