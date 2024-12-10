import React from 'react'
import {useState, useEffect} from 'react'
import Event from '../components/Event';
import {Link} from 'react-router-dom'

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);  
  useEffect(()=>{
        fetch("https://backend-api-render.onrender.com/api/events/")
        .then(res=>{return res.json()})
        .then(data=>{
          console.log(data)
          setEvents(data)
          setLoading(false)
        })
},[])
  return (
    <div>
      {loading?<p>Loading...</p>:events.map((event)=>{return <Event key={event.id} event={event}  />})}
      <Link to={'/create-event'}>Create Event</Link>   
    </div>
  )
}

export default Home
