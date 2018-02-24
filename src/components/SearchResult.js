import React, { Component } from 'react'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.result.name,
      address: props.result.address,
      key: props.result.key,
    }
  }

  render() {
    return (
      <div className="search-result">
        <div className="search-result-name">{ this.state.name }</div>
        <div className="search-result-address">{ this.state.address }</div>
      </div>
    )
  }
}

export default SearchResult
