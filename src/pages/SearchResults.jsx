import { Link, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ErrorMessage from "../components/ErrorMessage";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";


function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query");

  const { data, loading, error } = useFetch(
    query
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      : null,
  );

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  if (!data?.meals || !Array.isArray(data.meals)) {
    return <p>No results found.</p>;
  }

  return (
    <div>
      <h2>Search Results for "{query}"</h2>

      {/* {data.meals.map((meal) => (
        <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
          <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </div>
        </Link>
      ))} */}
      {data.meals.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default SearchResults;
