import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

export default function HomePage(){

     const { data, loading, error } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

     console.log(data);
console.log(loading);
console.log(error);

     if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    return(
        <div>
           <h2>Recipe Categories</h2>
           <div>
             <Link>
                <div>
                    <img/>
                </div>
             </Link>
           </div>
        </div>
        
    )
}