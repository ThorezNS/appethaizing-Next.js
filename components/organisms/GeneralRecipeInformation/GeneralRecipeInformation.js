import FoodPicture from '../../atoms/FoodPicture/FoodPicture';
import Title from '../../atoms/Title/Title';
import ShortRecipeInfo from '../../molecules/ShortRecipeInfo/ShortRecipeInfo';
import styles from './GeneralRecipeInformation.module.css';

const GeneralRecipeInformation = ({ recipeInformation }) => {
  return (
    <div className={styles.container}>
      {
        <>
          <div>
            <Title details title={recipeInformation.title} />
            <FoodPicture
              info
              src={recipeInformation.image}
              alt={recipeInformation.title}
            />
          </div>
          <ShortRecipeInfo recipe={recipeInformation} />
        </>
      }
    </div>
  );
};

export default GeneralRecipeInformation;
