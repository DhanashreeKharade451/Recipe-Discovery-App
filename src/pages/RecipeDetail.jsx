 import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";
 
 function RecipeDetail(){
const {recipeId} = useParams();

const {data,loading,error} = useFetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);

const {addFavorite, removeFavorite, isFavorite} = useFavorites();

if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const meal = data?.meals[0];

  if(!meal) return <p>No recipe found.</p>;

    return(
        <div>
            <h2>{meal.strMeal}</h2>
            <img src="meal.strMealThumb" width="300" alt={meal.strMeal}/>

             {/* Favorite Button */}
             <button 
             onClick={()=> isFavorite(recipeId)
                ? "removeFavorite(recipeId)"
                : addFavorite(recipeId)
             }>
                {isFavorite(recipeId)
                ? "Remove from Favorites"
                : "Add to favorite"
            }</button>

            <h3>Instructions</h3>
            <p>{meal.strInstructions}</p>

        </div>
    );
};
export default RecipeDetail;