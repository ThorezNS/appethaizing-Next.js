import styles from './Logo.module.css';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img className={styles.logo} src="/logo.png" alt="appethaizing logo" />
      </a>
    </Link>
  );
};

export default Logo;
