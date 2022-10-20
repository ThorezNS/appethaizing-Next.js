import styles from './FoodPicture.module.css';
import Image from 'next/image';

const FoodPicture = ({ src, alt, card, info }) => {
  let component;
  if (card) {
    component = <Image layout="fill" src={src} alt={alt} />;
  } else if (info) {
    component = <Image width={556} height={370} src={src} alt={alt} />;
  }
  return <div className={styles.imageWrapper}>{component}</div>;
};

export default FoodPicture;
