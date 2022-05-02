import DeviceItem from './DeviceItem';
import styles from './DeviceList.module.css';

function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.devices.map((device) => (
        <DeviceItem 
          key={device.id}
          id={device.id}
          image={device.image}
          device_name={device.device_name}
          specs={device.specs}
        />
      ))}
    </ul>
  );
}

export default MeetupList;