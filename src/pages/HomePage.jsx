import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function HomePage() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

//   console.log(data);
//   console.log(loading);
//   console.log(error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (

<div>
    <h2> Recipe Categories</h2>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      
      {data.categories.map((category) => (
        <Link
          key={category.idCategory}
          to={`/category/${category.strCategory}`}
        >
          <div>
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              width="200"
            />
            <p>{category.strCategory}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}
