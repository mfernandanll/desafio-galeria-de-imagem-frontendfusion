import { useFavorites } from "../context/FavoritesContext";
import { useFilter } from "../context/FilterContext";
import { useImages } from "../context/ImageContext";
import { ImageCard } from "./ImageCard";

export function ImageGallery() {
  const { images } = useImages();
  const { favorites } = useFavorites();
  const { filter } = useFilter();

  const filteredImages = () => {
    if (filter === 'favorites') {
      return favorites;
    }
    return images;
  };

  return (
    <div className="container mx-auto p-4">
      <div 
        className="
          grid grid-cols-1 gap-8
          sm:grid-cols-2 lg:grid-cols-3">
        {
          filteredImages().map((image) => (
            <ImageCard key={image.id} image={image} />
          ))
        }
      </div>
    </div>
  );
}