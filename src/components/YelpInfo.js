import React, {Component} from 'react'
import '../stylesheets/YelpInfo.css';

import { beRoot, bePort } from '../utils/env_helpers'
import handleResponse from '../utils/handle-response'

class YelpInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.basicInfo.name,
      phone: props.basicInfo.int_phone_number,
      latitude: props.basicInfo.latitude,
      longitude: props.basicInfo.longitude,
      rating: "",
      review_count: "",
      yelp_url: "",
    }
  }

  updateYelpInfo = (info) => {
    this.setState({
      rating: info.rating,
      review_count: info.review_count,
      yelp_url: info.yelp_url,
    })
  }

  updateBasicInfo = (newProps) => {
    this.setState(
      {
        name: newProps.basicInfo.name,
        phone: newProps.basicInfo.int_phone_number,
        latitude: newProps.basicInfo.latitude,
        longitude: newProps.basicInfo.longitude,
      },
      () => this.getYelpInfo()
    )
  }

  getYelpInfo = () => {
    return fetch(`${beRoot()}:${bePort()}/api/v1/yelp?name=${this.state.name}&phone=${this.state.phone}&latitude=${this.state.latitude}&longitude=${this.state.longitude}`)
      .then(response => handleResponse(response))
      .then(info => this.updateYelpInfo(info))
      .catch(error => console.error({ error }))
  }

  componentDidMount() {
    this.getYelpInfo()
  }

  componentWillReceiveProps(newProps) {
    this.updateBasicInfo(newProps)
  }

  render() {
    return(
      <div className="yelp-info">
        <a className="yelp-title"
         href={ this.state.yelp_url }>Yelp</a>
        <div className="yelp-info-rating">Rating: { this.state.rating }/5</div>
        <div className="yelp-info-count">Review Count: { this.state.review_count }</div>
      </div>
    )
  }
}

export default YelpInfo
