import RecipeInstructions from '../../components/organisms/RecipeInstructions/RecipeInstructions';
import GeneralRecipeInformation from '../../components/organisms/GeneralRecipeInformation/GeneralRecipeInformation';
import styles from '../../styles/details.module.css';

const RecipeDetails = ({ recipeInformation, recipeInstructions }) => {
  return (
    <div className={styles.container}>
      <GeneralRecipeInformation recipeInformation={recipeInformation} />
      <RecipeInstructions recipeInstructions={recipeInstructions} />
    </div>
  );
};

export default RecipeDetails;

export async function getServerSideProps(context) {
  const KEY = process.env.REACT_APP_API_KEY;
  const id = context.params.detailsID;

  const information = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`
  );
  const recipeInformation = await information.json();

  const instructions = await fetch(
    `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${KEY}`
  );
  const recipeInstructions = await instructions.json();

  return { props: { recipeInformation, recipeInstructions } };
}
