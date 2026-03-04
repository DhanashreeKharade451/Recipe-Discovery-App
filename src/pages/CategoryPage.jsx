import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CategoryPage(){

    const {categoryName} = useParams();
    console.log(categoryName);

    const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    return(
        <div>
            <h2>{categoryName} Recipes </h2>
            <div style={{display:"flex", flexWrap: "wrap", gap: "20px"}}>
                {data?.meals.map((meal) => (
                <Link key={meal.idMeal} to={`/Recipe/${meal.idMeal}`}> 
                   <img src={meal.strMealThumb} alt="150" />
                   <p>{meal.strMeal}</p>
                </Link>
            ))}
                
            </div>
        </div>
    )
}