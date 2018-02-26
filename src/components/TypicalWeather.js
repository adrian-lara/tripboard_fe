import React, {Component} from 'react'

import { beRoot, bePort } from '../utils/env_helpers'
import handleResponse from '../utils/handle-response'

class TypicalWeather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avgHigh: "",
      avgLow: "",
      avgPrecip: "",
      chanceWindy: "",
      chanceHumid: "",
      chanceCloudy: "",
    }
  }

  buildDates(latestProps) {
    return (
      latestProps.beginDate.substring(5).replace("-","") +
      latestProps.endDate.substring(5).replace("-","")
    )
  }

  getTypicalWeather(latestProps) {
    const dates = this.buildDates(latestProps)
    const latitude = latestProps.latitude
    const longitude = latestProps.longitude

    fetch(`${beRoot()}:${bePort()}/api/v1/weather?latitude=${latitude}&longitude=${longitude}&dates=${dates}`)
      .then(response => handleResponse(response))
      .then(weather => this.updateWeather(weather))
      .catch(error => console.error({ error }))
  }

  updateWeather(weather) {
    this.setState({
      avgHigh: weather.avg_high,
      avgLow: weather.avg_low,
      avgPrecip: weather.avg_precip,
      chanceWindy: weather.chance_windy,
      chanceHumid: weather.chance_humid,
      chanceCloudy: weather.chance_cloudy,
    })
  }

  componentDidMount() {
    this.getTypicalWeather(this.props)
  }

  componentWillReceiveProps(newProps) {
    this.getTypicalWeather(newProps)
  }

  render() {
    return(
      <div className="typical-weather">
        <div className="typical-weather-avgHigh">Avg. High: { this.state.avgHigh }F</div>
        <div className="typical-weather-avgLow">Avg. Low: { this.state.avgLow }F</div>
        <div className="typical-weather-avgPrecip">Avg. Precip: { this.state.avgPrecip }in.</div>
        <div className="typical-weather-chanceWindy">Windy Chance: { this.state.chanceWindy }%</div>
        <div className="typical-weather-chanceHumid">Humid Chance: { this.state.chanceHumid }%</div>
        <div className="typical-weather-chanceCloudy">Cloudy Chance: { this.state.chanceCloudy }%</div>
      </div>
    )
  }
}

export default TypicalWeather
