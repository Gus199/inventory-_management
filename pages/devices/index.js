import React from 'react'
import Card from '../../components/ui/Card'
export default function Devices({devices}) {
  console.log(devices)
  return (<>

  {devices.map((device) => (<Card><h1 key={device.id}>{device.device_name}</h1>
    <p key={device.id}>{device.description}</p></Card>))}

    
  </>
  
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/devices')
  const devices = await res.json()

  return {
    props: {
      devices: devices.data
    }
  }
}