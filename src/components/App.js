import React, { Component } from 'react';
import '../stylesheets/App.css';

import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
      </div>
    );
  }
}

export default App;
