import React from 'react'
import '../styles/Event.css'


function Event(props) {
    const {title, description} = props.event;
  return (
    <div className='event'>
      <h5>{title}</h5>
      <p className='description'>{description}</p>
    </div>
  )
}

export default Event
