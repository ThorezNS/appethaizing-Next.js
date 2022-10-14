import Link from 'next/link';
import styles from './Title.module.css';

const Title = ({ title, main, card, details, heading }) => {
  let titleType;

  if (main) {
    titleType = (
      <Link href="/">
        <a>
          <h1 className={styles.main}>{title}</h1>
        </a>
      </Link>
    );
  } else if (card) {
    titleType = <h3 className={styles.card}>{title}</h3>;
  } else if (details) {
    titleType = <h2 className={styles.details}>{title}</h2>;
  } else if (heading) {
    titleType = <h3 className={styles.heading}>{title}</h3>;
  }

  return <>{titleType}</>;
};

export default Title;
