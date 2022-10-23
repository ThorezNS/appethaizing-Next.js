import CardsContainer from '../../components/organisms/CardsContainer/CardsContainer';
import RecipeCard from '../../components/organisms/RecipeCard/RecipeCard';
import Title from '../../components/atoms/Title/Title';

const FoundRecipes = ({ foundRecipes, found }) => {
  return (
    <CardsContainer>
      <Title
        title={
          foundRecipes.results.length
            ? `get your ${found} recipe`
            : `no results for ${found}`
        }
        heading
      />
      {foundRecipes.results.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </CardsContainer>
  );
};

export default FoundRecipes;

export async function getServerSideProps(context) {
  const KEY = process.env.REACT_APP_API_KEY;
  const found = context.params.foundRecipes;

  const recipes = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=${found}&number=50`
  );
  const foundRecipes = await recipes.json();

  return { props: { foundRecipes, found } };
}
