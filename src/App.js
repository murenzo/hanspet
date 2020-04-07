import React, { Component } from 'react';
import './App.css';

import CreateCalendar from './pages/event/CreateEvent.page';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sabith Raji'
    }
  }
  render() {
    return (
      <div className='container'>
        <CreateCalendar />
      </div>
    );
  }
}

export default App;
