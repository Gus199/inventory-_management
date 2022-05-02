import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Inventory Managments</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Devices</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Device</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;