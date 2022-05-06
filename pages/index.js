import DeviceList from "../components/DeviceList";

const DUMMY_DEVICES = [
  {
    id: "d1",
    device_name: "Macbook Pro 2015",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8&w=1000&q=80",
    specs: " 15in Macbook Pro 2015, 2.5GHz Core-I7 16GB 512GB SSD",
    description: " this device description number one ",
  },
  {
    id: "d2",
    device_name: "Macbook Pro 2019",
    image:
      "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    specs: " 16in Macbook Pro 2019, 2.3GHz Core-I7 16GB 512GB SSD",
    description: " this device description number Tow ",
  },
];

export default function HomePage({ devices }) {
  console.log(devices)
  return (<>

   <h1>{devices.data[0].device_name}</h1>
  <DeviceList devices={DUMMY_DEVICES} />;
  </>
  
  )
}


export async function getStaticProps(context) {
  const  res = await fetch('http://localhost:3000/api/devices')
  const devices = await res.json()
  return {
    props: {
      devices
    }
  }
}