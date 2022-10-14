import styles from './Category.module.css';
import CategoryLink from '../../atoms/CategoryLink/CategoryLink';

const Category = () => {
  return (
    <div className={styles.category}>
      <CategoryLink text="entree" />
      <CategoryLink text="breakfast" />
      <CategoryLink text="salad" />
      <CategoryLink text="appetizer" />
      <CategoryLink text="dessert" />
      <CategoryLink text="snack" />
    </div>
  );
};

export default Category;
