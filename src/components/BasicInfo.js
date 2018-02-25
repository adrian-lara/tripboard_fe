import React from 'react'

const BasicInfo = (props) => {
  const basicInfo = props.basicInfo

  return(
    <div className="basic-info">
      <div className="basic-info-name">{ basicInfo.name }</div>
      <div className="basic-info-address">{ basicInfo.address }</div>
      <div className="basic-info-hours">{ basicInfo.hours }</div>
      <div className="basic-info-phone">{ basicInfo.phone }</div>
      <div className="basic-info-website">{ basicInfo.website }</div>
    </div>
  )
}

export default BasicInfo
