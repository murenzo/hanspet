import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/navbar.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sabith Raji'
    }
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
