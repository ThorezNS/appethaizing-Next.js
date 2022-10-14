import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './CategoryLink.module.css';

const CategoryLink = ({ text }) => {
  const router = useRouter();
  const linkStyle = `${styles.link}  ${styles[text]}`;
  const activeLinkStyle = `${linkStyle} ${styles.active}`;

  return (
    <div className={styles.wrapper}>
      <Link href={`/category/${text}`}>
        <a
          className={
            router.pathname === `/category/${text}`
              ? activeLinkStyle
              : linkStyle
          }
        >
          {text}
        </a>
      </Link>
    </div>
  );
};

export default CategoryLink;
