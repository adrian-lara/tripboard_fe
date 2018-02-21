import React, { Component } from 'react';
import '../stylesheets/App.css';

import Title from './Title'
import Welcome from './Welcome'
import SearchBar from './SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Welcome/>
        <SearchBar/>
      </div>
    );
  }
}

export default App;
