import React, { Component } from 'react'
import { beRoot, bePort } from '../utils/env_helpers'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }

  getMessage() {
    return fetch(`${beRoot()}:${bePort()}/api/v1/welcome`)
      .then((response) => response.json() )
  }

  componentDidMount() {
    this.getMessage()
      .then((response) => this.setState({ message: response.message }))
      .catch((error) => console.error({ error }))
  }

  render() {
    return (
      <div className="Welcome">
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

export default Welcome
