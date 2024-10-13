import { useFavorites } from "../context/FavoritesContext";
import { useFilter } from "../context/FilterContext";
import { useImages } from "../context/ImageContext";
import { ImageCard } from "./ImageCard";
import { useMemo } from "react";

export function ImageGallery() {
  const { images } = useImages();
  const { favorites } = useFavorites();
  const { filter, searchQuery } = useFilter();

  const getFilteredImages = useMemo(() => {
    if (filter === 'favorites') {
      return favorites;
    } else if (filter === 'search' && searchQuery) {
      return images.filter(image => 
        image.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return images;
  }, [images, favorites, filter, searchQuery]);

  return (
    <div className="container mx-auto p-4">
      <div 
        className="
          grid grid-cols-1 gap-8
          sm:grid-cols-2 lg:grid-cols-3">
        {
          getFilteredImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))
        }
      </div>
    </div>
  );
}