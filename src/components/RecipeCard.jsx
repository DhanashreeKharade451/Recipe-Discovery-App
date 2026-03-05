import { Link } from "react-router-dom"

function RecipeCard({meal}){
    return(
        <div>
               <Link to={`/recipe/${meal.idMeal}`}>
               <div style={{ border: "1px solid #ddd", padding: "10px" }}>
                <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
                <p>{meal.strMeal}</p>
               </div>
               </Link>
        </div>
    )
};

export default RecipeCard;