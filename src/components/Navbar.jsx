
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const[query, setQuery] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
    setQuery("");
  }
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Favorites">Favorites</Link>
        </li>

        {/* searchBar */}
        <form onSubmit={handleSubmit}>
          <input
           type="text" 
           placeholder="Search recipes..."
           value={query}
           onChange={(e) => {setQuery(e.target.value)}}
           />
          <button type="submit">Search</button>

        </form>


        {/* <li>
          <Link to="/Category">Category</Link>
        </li>
        <li>
          <Link to="/Recipe">RecipeDetail</Link>
        </li> */}
        
        {/* <li>
          <Link to="SearchResults">SearchResults</Link>
        </li> */}
      </ul>
    </nav>
  );
}
