import React, {Component} from 'react'

import BasicInfo from './BasicInfo'
import YelpInfo from './YelpInfo'
import Weather from './Weather'

class PlaceInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      basicInfo: props.basicInfo,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({basicInfo: newProps.basicInfo})
  }

  render() {
    return(
      <div className="PlaceInfo">
        <BasicInfo
         basicInfo={this.state.basicInfo}/>
        <Weather
         basicInfo={this.state.basicInfo}/>
        <YelpInfo
         basicInfo={this.state.basicInfo}/>
      </div>
    )
  }
}

export default PlaceInfo
