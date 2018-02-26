import React, { Component } from 'react';
import '../stylesheets/App.css';

import Title from './Title'
import SearchBar from './SearchBar'
import PlaceInfo from './PlaceInfo'

import { beRoot, bePort } from '../utils/env_helpers'
import handleResponse from '../utils/handle-response'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeInfo: {},
    }
  }

  getInfo = (place_id) => {
    fetch(`${beRoot()}:${bePort()}/api/v1/basic-info?place_id=${place_id}`)
      .then(response => handleResponse(response))
      .then(placeInfo => this.setState({placeInfo: placeInfo}))
      .catch(error => console.error({ error }))
  }

  displayInfo = () => {
    if (Object.keys(this.state.placeInfo).length > 0) {
      return <PlaceInfo
              basicInfo={this.state.placeInfo}/>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="App">
        <Title/>
        <SearchBar
         getInfo={this.getInfo}/>
        { this.displayInfo() }
      </div>
    );
  }
}

export default App;
