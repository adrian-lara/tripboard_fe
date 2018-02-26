import React, {Component} from 'react'
import '../stylesheets/Weather.css';

import TypicalWeather from './TypicalWeather'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: props.basicInfo.latitude,
      longitude: props.basicInfo.longitude,
      beginDate: "",
      endDate: "",
    }
  }

  updateDate = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  validateDates() {
    if ((this.state.beginDate !== "") && (this.state.endDate !== "")) {
      const date1 = new Date(this.state.beginDate)
      const date2 = new Date(this.state.endDate)
      const diff = date2.getTime() - date1.getTime()
      return (0 <= diff && diff < (30 * 1000 * 3600 * 24))
    }
  }

  displayTypicalWeather() {
    if (this.validateDates()) {
      return(
        <TypicalWeather
         latitude={this.state.latitude}
         longitude={this.state.longitude}
         beginDate={this.state.beginDate}
         endDate={this.state.endDate}/>
      )
    } else {
      return null
    }
  }

  updateLongLat(newProps) {
    this.setState({
      latitude: newProps.basicInfo.latitude,
      longitude: newProps.basicInfo.longitude,
    })
  }

  componentWillReceiveProps(newProps) {
    this.updateLongLat(newProps)
  }

  render() {
    return (
      <div className="Weather">
        <p className="weather-title">Weather</p>
        <p className="dates-label">Choose dates: (must be under 30 days apart)</p>
        <div className="dates">
          <input
           className="date-input"
           type="date"
           onChange={this.updateDate.bind(this, "beginDate")}></input>-
          <input
           className="date-input"
           type="date"
           onChange={this.updateDate.bind(this, "endDate")}></input>
        </div>
         { this.displayTypicalWeather() }
      </div>
    )
  }
}

export default Weather
