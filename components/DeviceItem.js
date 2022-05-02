import Card from './ui/Card';
import styles from './DeviceItem.module.css';
import {useRouter} from 'next/router'

function DeviceItem(props) {
  const router = useRouter()
  function showDetailsHandler () {
    router.push('/devices/' + props.id)
    
  

  }

  
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.device_name} />
        </div>
        <div className={styles.content}>
          <h3>{props.device_name}</h3>
          <h2>{props.specs}</h2>
        </div>
        <div className={styles.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default DeviceItem;