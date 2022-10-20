import Link from 'next/link';
import FoodPicture from '../../atoms/FoodPicture/FoodPicture';
import Title from '../../atoms/Title/Title';
import CardIconsContainer from '../../molecules/CardIconsContainer/CardIconsContainer';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/details/${recipe.id}`}>
      <a className={styles.wrapper}>
        <Title card title={recipe.title} />
        <FoodPicture card src={recipe.image} alt={recipe.title} />
        {recipe.readyInMinutes && <CardIconsContainer recipe={recipe} />}
      </a>
    </Link>
  );
};

export default RecipeCard;
