import Link from 'next/link';
import styles from '../styles/404.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2>Sorry</h2>
      <p>Page not found</p>
      <Link href="/">Go back to the home page...</Link>
    </div>
  );
};

export default NotFound;
