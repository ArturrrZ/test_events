import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

function SendPutRequest() {
    const {pk} = useParams();
    console.log(pk);
    fetch(`https://backend-api-render.onrender.com/api/events/${pk}/`,{
        method: "PUT",
        // DELETE does not require body!!!
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ title: "new title" })
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error("Error", error);
      });
  return (
    <div>
      send
    </div>
  )
}

export default SendPutRequest
