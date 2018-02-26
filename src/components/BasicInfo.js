import React from 'react'
import '../stylesheets/BasicInfo.css';

import HourEntry from './HourEntry'

const renderHours = (hours) => {
  if (hours) {
    return hours.map((hour) => {
      return (
        <HourEntry
        hour={hour}/>
      )
    })
  }
}

const BasicInfo = (props) => {
  const basicInfo = props.basicInfo

  return(
    <div className="basic-info">
      <a
       className="link basic-info-name"
       href={ basicInfo.website }>{ basicInfo.name }</a>
      <div className="basic-info-address">{ basicInfo.address }</div>
      <div className="basic-info-phone">{ basicInfo.phone_number }</div>
      <div className="basic-info-hours">{ renderHours(basicInfo.hours) }</div>
    </div>
  )
}

export default BasicInfo
