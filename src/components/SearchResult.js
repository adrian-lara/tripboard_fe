import React, { Component } from 'react'
import '../stylesheets/SearchResult.css'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.result.name,
      address: props.result.address,
      place_id: props.result.place_id
      }
  }

  getInfo = () => {
    return this.props.getInfo(this.state.place_id)
  }

  render() {
    return (
      <div className="search-result"
       onClick={this.getInfo}>
        <div className="search-result-name">{ this.state.name }</div>
        <div className="search-result-address">{ this.state.address }</div>
      </div>
    )
  }
}

export default SearchResult
