import React, {Component} from 'react'

import BasicInfo from './BasicInfo'


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
      </div>
    )
  }
}

export default PlaceInfo
