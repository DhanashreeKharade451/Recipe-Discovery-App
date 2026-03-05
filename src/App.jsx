
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults';
import RecipeCard from './components/RecipeCard';
import ErrorMessage from './components/ErrorMessage';




function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar/>
              
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/category/:categoryName" element={<CategoryPage/>} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/search" element={<SearchResults/>} />
        {/* <Route path="*" element={<NotFoundPage />} /> Fallback for unmatched routes */}
      </Routes>

     

    </>
  )
}

export default App;
