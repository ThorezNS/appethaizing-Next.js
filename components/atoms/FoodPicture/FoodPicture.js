import styles from './FoodPicture.module.css';
import Image from 'next/image';

const FoodPicture = ({ src, alt, card, info }) => {
  let component, isSrc;
  isSrc = src ? src : '/backup_image.jpg';

  if (card) {
    component = <Image layout="fill" src={isSrc} alt={alt} />;
  } else if (info) {
    component = <Image width={556} height={370} src={isSrc} alt={alt} />;
  }
  return <div className={styles.imageWrapper}>{component}</div>;
};

export default FoodPicture;
