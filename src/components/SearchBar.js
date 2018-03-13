import React, { Component } from 'react'
import '../stylesheets/SearchBar.css'

import SearchResult from './SearchResult'
import { beRoot, bePort } from '../utils/env_helpers'
import handleResponse from '../utils/handle-response'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      q: "",
      searchResults: [],
    }
  }

  checkForSubmit(event) {
    if (event.key === "Enter") this.sendSearchReq(event)
  }

  changeQ(event) {
    this.setState({q: event.target.value})
  }

  sendSearchReq(event) {
    event.preventDefault()
    fetch(`${beRoot()}:${bePort()}/api/v1/search-places?q=${this.state.q}`)
      .then(response => handleResponse(response))
      .then(searchResults => this.setState({ searchResults: searchResults }))
      .catch(error => console.error({ error }))
  }

  createSearchResult = (searchResult) => {
    return (
      <SearchResult
       key={searchResult.place_id}
       result={searchResult}
       getInfo={this.props.getInfo}/>
    )
  }

  render() {
    let searchResults = []
    let searchResultsTitle = ""

    if (this.state.searchResults.length > 0) {
      searchResults = this.state.searchResults.map(this.createSearchResult)
      searchResultsTitle = (
        <div id="search-results-title">
          Search Results
        </div>
      )
    } else {
      searchResults = []
    }

    return (
      <div className="SearchBar">
        <form id="search-form">
          <input
            type="text"
            id="search-input"
            placeholder="Find your place...  (ex. Cheesesteaks Philadelphia, San Francisco Bike Tours)"
            onChange={this.changeQ.bind(this)}
            onKeyUp={this.checkForSubmit.bind(this)}></input>
          <input
            type="submit"
            id="search-button"
            value="Search"
            onClick={this.sendSearchReq.bind(this)}></input>
        </form>
        { searchResultsTitle }
        { searchResults }
      </div>
    )
  }
}

export default SearchBar
