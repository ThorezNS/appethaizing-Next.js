import styles from './FoodPicture.module.css';
import Image from 'next/image';

const FoodPicture = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image layout="fill" src={src} alt={alt} />
    </div>
  );
};

export default FoodPicture;
