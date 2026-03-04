import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Favorites(){
    const { favorites } = useFavorites();

    if(favorites.length === 0){
        return <p> No favorite recipes yet. Go add some! </p>
    }
    
    return(
        <div>
            <h2>Your Favorite Recipes</h2>

            {favorites.map((id) => (
                <FavoriteItem key = {id} id = {id}/>

            )  )}
           
        </div>
    )
  }
    function FavoriteItem({id}){
        const {data, loading } =useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`);

        if (loading) return <p>Loading...</p>;

        const meal = data?.meals[0];

        return(
            <Link to ={`/recipe/${id}`}>
            <div>
                <img src={meal.strMealThumb} width= "150" />
                <p>{meal.strMeal}</p>
            </div>
            </Link>
        )


  
}