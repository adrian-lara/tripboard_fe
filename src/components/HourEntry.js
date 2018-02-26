import React from 'react'

const HourEntry = (props) => {
  const hour = props.hour

  return(
    <div className="hour-entry">
      {hour}
    </div>
  )
}

export default HourEntry
