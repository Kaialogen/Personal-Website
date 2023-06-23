import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/">
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link  legacyBehavior href="/about">
            <a className={styles.navLink}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;