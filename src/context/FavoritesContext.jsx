import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

function FavoritesContext(){

const[favorites, setfavorites] = useLocalStorage("favorites", []);

const addFavorites =(id) =>{
    if(!favorites.includes(id)){
        setfavorites([...favorites, id]);
    }
};
const removeFavarite = (id) => {
    setfavorites(favorites.filter((fav) => fav !== id));
}

const isFavorites = (id) =>{
    re
}

    return(
        <div>FavoritesContext</div>
    );
};

export default FavoritesContext;