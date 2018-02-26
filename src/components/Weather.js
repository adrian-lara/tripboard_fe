import React, {Component} from 'react'

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
      <div>
        <input
         id="begin-date"
         type="date"
         onChange={this.updateDate.bind(this, "beginDate")}></input>
        <input
         id="end-date"
         type="date"
         onChange={this.updateDate.bind(this, "endDate")}></input>
         { this.displayTypicalWeather() }
      </div>
    )
  }
}

export default Weather
