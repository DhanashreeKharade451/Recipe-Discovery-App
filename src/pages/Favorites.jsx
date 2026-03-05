import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";


    function FavoriteItem({id}){
        const {data, loading } =useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

        if (loading) return <p>Loading...</p>;

        const meal = data?.meals?.[0];

        return <RecipeCard meal={meal} />;

        // return(
        //     <Link to ={`/recipe/${id}`}>
        //     <div>
        //         <img src={meal.strMealThumb} width="150" alt={meal.strMeal}/>
        //         <p>{meal.strMeal}</p>
        //     </div>
        //     </Link>
        // )
}

export default FavoriteItem;