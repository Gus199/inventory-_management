import React from 'react'
import NewMeetupForm from '../../components/NewDeviceForm'

export default function NewDevice() {
    function addDeviceHandler(enteredMeetupData) {
        console.log(enteredMeetupData)

    }
  return (<>
  <NewMeetupForm  onAddDevice={addDeviceHandler}/>
  
  </>
    
  )
}

