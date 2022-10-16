// import Curiosity from '../components/atoms/Curiosity/Curiosity';
import Title from '../components/atoms/Title/Title';
import CardsContainer from '../components/organisms/CardsContainer/CardsContainer';
// import RecipeCard from '../organisms/RecipeCard/RecipeCard';

export default function Home({ response }) {
  return (
    <CardsContainer>
      <Title title={`get your random recipe`} heading />
      {response.recipes.map((recipe) => {
        return <p key={recipe.id}>{recipe.title}</p>;
      })}
      {/* <Curiosity /> */}
    </CardsContainer>
  );
}

export async function getServerSideProps() {
  const KEY = process.env.REACT_APP_API_KEY;
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5`
  );
  const response = await res.json();

  return { props: { response } };
}
