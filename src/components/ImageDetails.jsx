import { useParams } from "react-router-dom";
import { useImages } from "../context/ImageContext";
import { useState } from "react";

export function ImageDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const { imageId } = useParams();
  const { images } = useImages();

  const image = images.find((img) => img.id === imageId);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      {image ? (
        <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
          <div className="relative">
            {isLoading && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse"
                aria-hidden="true"
              ></div>
            )}
            <img
              src={image.download_url}
              alt={`Imagem de ${image.author}`}
              onLoad={handleImageLoad}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg aspect-square"
            />
          </div>
          <div>
            <h1 className="text-2xl text-gray-800 pb-4">Detalhes da imagem</h1>
            <p className="pb-2">Autor: {image.author}</p>
            <p className="pb-2">
              Dimensões: {image.width} x {image.height}
            </p>
            <p className="pb-2">URL: &nbsp;
              <a 
                href={image.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline text-blue-600 hover:text-blue-800">
                  {image.url}
              </a>
            </p>
          </div>
        </div>
      ) : (
        <p>Imagem não encontrada.</p>
      )}
    </div>
  );
}
