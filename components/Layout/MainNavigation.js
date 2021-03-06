import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link href='/'>Inventory Managments</Link></div>
      <nav>
        <ul>
        <li>
            <Link href='/devices/add'>Add New Device</Link>
          </li>
          <li>
            <Link href='/alldevices'>All Devices</Link>
          </li>
          <li>
            <Link href='/account/login'>login</Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;