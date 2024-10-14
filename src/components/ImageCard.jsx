import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { Heart } from "phosphor-react";
import { useState } from "react";

export function ImageCard({ image }) {
  const [isLoading, setIsLoading] = useState(true);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();
  const favorite = isFavorite(image.id);

  const handleNavigate = () => {
    navigate(`/details/${image.id}`);
  };

  const handleFavoriteClick = () => {
    favorite ? removeFavorite(image.id) : addFavorite(image);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div key={image.id} className="relative overflow-hidden group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse"></div>
      )}

      <img
        src={image.download_url}
        alt={`Imagem de ${image.author}`}
        loading="lazy"
        onLoad={handleImageLoad}
        className="object-cover w-full h-full rounded-lg aspect-square transition-transform duration-300 group-hover:scale-110 group-hover:grayscale"
      />

      <div
        onClick={handleNavigate}
        className="absolute cursor-pointer inset-0 p-4 bg-black text-white bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <p>{image.author}</p>
        <a href="#" className="underline mt-2">
          Ver detalhes
        </a>
      </div>

      <button
        onClick={handleFavoriteClick}
        className="px-4 py-2 rounded text-white absolute top-4 right-4 bg-transparent hover:bg-opacity-70 transition duration-300"
        aria-label={
          favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
      >
        <Heart
          size={22}
          weight={favorite ? "fill" : "regular"}
          className="text-red-700"
        />
      </button>
    </div>
  );
}
