import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { Heart } from "phosphor-react";

export function ImageCard({ image }) {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(image.id);

  const handleNavigate = () => {
    navigate(`/details/${image.id}`);
  };

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(image.id);
    } else {
      addFavorite(image);
    }
  };

  return (
    <div key={image.id} className="relative overflow-hidden group">
      <img
        src={image.download_url}
        alt={`Imagem ${image.id}`}
        className="
                object-cover w-full h-full rounded-lg 
                transition-transform duration-400 
                group-hover:scale-110 group-hover:grayscale aspect-square"
      />
      <div
        onClick={handleNavigate}
        className="
                absolute cursor-pointer inset-0 p-4 
                bg-black text-white bg-opacity-50 
                flex flex-col items-center justify-center 
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100"
      >
        <p>{image.author}</p>
        <a href="#" className="underline mt-2">
          Ver detalhes
        </a>
      </div>
      <button
        onClick={handleFavoriteClick}
        className="mt-4 px-4 py-2 rounded text-white absolute top-0 right-0"
        aria-label="Favoritar foto" alt="Favoritar foto"
      >
        <Heart size={22} weight={favorite ? "fill" : "regular"} className="text-red-700" />
      </button>
    </div>
  );
}
