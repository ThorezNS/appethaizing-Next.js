import styles from './Curiosity.module.css';

const Curiosity = ({ curiosity }) => {
  return (
    <div className={styles.text}>
      <p>{`"${curiosity.text}"`}</p>
    </div>
  );
};

export default Curiosity;
