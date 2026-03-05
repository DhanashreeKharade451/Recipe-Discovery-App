import { Link, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function SearchResults() {
  const query = new URLSearchParams(useLocation().search).get("query");

  const { data, loading, error } = useFetch(
    query
      ?  `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      : null
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!data?.meals || !Array.isArray(data.meals)) {
    return <p>No results found.</p>;
  }

  return (
    <div>
      <h2>Search Results for "{query}"</h2>

      {data.meals.map((meal) => (
        <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
          <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SearchResults;
