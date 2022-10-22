import Title from '../../components/atoms/Title/Title';
import CardsContainer from '../../components/organisms/CardsContainer/CardsContainer';
import RecipeCard from '../../components/organisms/RecipeCard/RecipeCard';

const CategoryPage = ({ recipeCategory, name }) => {
  return (
    <CardsContainer>
      <Title title={`get your ${name} recipe`} heading />
      {recipeCategory.results.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
    </CardsContainer>
  );
};

export default CategoryPage;

export async function getServerSideProps(context) {
  const KEY = process.env.REACT_APP_API_KEY;
  const name = context.params.categoryName;
  const type = name === 'entree' ? 'main course' : name;

  const category = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&type=${type}&number=50`
  );
  const recipeCategory = await category.json();

  return { props: { recipeCategory, name } };
}
