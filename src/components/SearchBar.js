import React, { Component } from 'react'
import '../stylesheets/SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form id="search-form">
          <input type="text" id="search-input" placeholder="Start Trippin'"></input>
        </form>
      </div>
    )
  }
}

export default SearchBar
