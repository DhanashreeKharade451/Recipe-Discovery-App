import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

// FavoritesProvider component
export default function FavoritesProvider({children}){

const[favorites, setFavorites] = useLocalStorage("favorites", []);

const addFavorite =(id) =>{
    if(!favorites.includes(id)){
        setFavorites([...favorites, id]);
    }
};
const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav !== id));
}

const isFavorite = (id) =>{
    return favorites.includes(id);
};

    return(
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

// Custom hook to use FavoritesContext
export function useFavorites(){
    const context = useContext(FavoritesContext);

    if(!context)
        throw new Error("useFavorites must be used inside FavoritesProvider");
    return context;
                
}


