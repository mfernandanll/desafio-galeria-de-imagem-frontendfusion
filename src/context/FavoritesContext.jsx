import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (image) => {
    if (!favorites.some((fav) => fav.id === image.id)) {
      setFavorites((prev) => [...prev, image]);
    }
  };

  const removeFavorite = (imageId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== imageId));
  };

  const isFavorite = (imageId) => {
    return favorites.some((fav) => fav.id === imageId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
