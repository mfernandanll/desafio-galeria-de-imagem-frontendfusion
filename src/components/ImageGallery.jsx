import { useFavorites } from "../context/FavoritesContext";
import { useFilter } from "../context/FilterContext";
import { useImages } from "../context/ImageContext";
import { ImageCard } from "./ImageCard";
import { useEffect, useRef, useState } from "react";

const IMAGES_PER_PAGE = 9;

export function ImageGallery() {
  const [page, setPage] = useState(1);
  const [filteredImages, setFilteredImages] = useState([]);
  
  const { images, loading, error } = useImages();
  const { favorites } = useFavorites();
  const { filter, searchQuery } = useFilter();
  const prevFilterRef = useRef(filter);

  useEffect(() => {
    let newImages = images;

    if (filter === 'favorites') {
      newImages = favorites;
    } else if (filter === 'search' && searchQuery) {
      newImages = images.filter(image =>
        image.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredImages(newImages);

    if (prevFilterRef.current !== filter) {
      setPage(1);
    }

    prevFilterRef.current = filter;
  }, [images, favorites, filter, searchQuery]);

  const paginateImages = (allImages, currentPage) => {
    const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
    return allImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  };

  const paginatedImages = paginateImages(filteredImages, page);

  const loadNextPage = () => {
    if (page < Math.ceil(filteredImages.length / IMAGES_PER_PAGE)) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const loadPreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-between gap-8 min-h-[85vh]">
      <div 
        className="
          grid grid-cols-1 gap-8 
          sm:grid-cols-2 lg:grid-cols-3">
        {
          error ? (
            <p>Erro ao carregar imagens: {error}</p>
          ) : (
            paginatedImages.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))
          )
        }
      </div>

      <div className="flex justify-between items-center mt-auto">
        <button 
          onClick={loadPreviousPage} 
          disabled={page === 1}
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50">
          Página anterior
        </button>

        <span>Página: {page}</span>

        <button 
          onClick={loadNextPage} 
          disabled={page >= Math.ceil(filteredImages.length / IMAGES_PER_PAGE)}
          className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50">
          Próxima página
        </button>
      </div>
    </div>
  );
}