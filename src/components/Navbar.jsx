import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/Category">Category</Link>
        </li>
        <li>
          <Link to="/Recipe">RecipeDetail</Link>
        </li> */}
        <li>
          <Link to="/Favorites">Favorites</Link>
        </li>
        {/* <li>
          <Link to="SearchResults">SearchResults</Link>
        </li> */}
      </ul>
    </nav>
  );
}
