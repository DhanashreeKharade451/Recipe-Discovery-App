
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RecipeDetail from './components/RecipeCard';
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults';



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
            
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Category/:categoryName" element={<CategoryPage/>} />
        <Route path="/Recipe/:recipeId " element={<RecipeDetail/>} />
          <Route path="/Favorites" element={<Favorites/>} />
          <Route path="/SearchResults" element={<SearchResults/>} />
        {/* <Route path="*" element={<NotFoundPage />} /> Fallback for unmatched routes */}
      </Routes>

    </>
  )
}

export default App
