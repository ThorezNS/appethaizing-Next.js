import Curiosity from '../components/atoms/Curiosity/Curiosity';
import Title from '../components/atoms/Title/Title';
import CardsContainer from '../components/organisms/CardsContainer/CardsContainer';
import RecipeCard from '../components/organisms/RecipeCard/RecipeCard';

export default function Home({ randomRecipes, trivia }) {
  return (
    <CardsContainer>
      <Title title={`get your random recipe`} heading />
      {randomRecipes.recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />;
      })}
      <Curiosity curiosity={trivia} />
    </CardsContainer>
  );
}

export async function getServerSideProps() {
  const KEY = process.env.REACT_APP_API_KEY;
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5`
  );
  const randomRecipes = await res.json();

  const curio = await fetch(
    `https://api.spoonacular.com/food/trivia/random?apiKey=${KEY}`
  );
  const trivia = await curio.json();

  return { props: { randomRecipes, trivia } };
}
