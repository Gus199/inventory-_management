import React from 'react'

import NewMeetupForm from '../../components/NewDeviceForm'

export default function NewDevice() {
   async function addDeviceHandler(enterDeviceData) {
        const response = await fetch('http://localhost:3000/api/devices', {
          method: "POST",
          body:JSON.stringify(enterDeviceData),
          headers: {
            "Content-Type": "application/json"
          }

        });
        const data = await response.json()
        
        console.log(data)

    }
  return (<>
  <NewMeetupForm  onAddDevice={addDeviceHandler}/>
  
  </>
    
  )
}

