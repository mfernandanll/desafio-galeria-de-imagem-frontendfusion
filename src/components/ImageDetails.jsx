import { useParams } from "react-router-dom";
import { useImages } from "../context/ImageContext";

export function ImageDetails() {
  const { imageId } = useParams();
  const { images } = useImages();

  const image = images.find((img) => img.id === imageId);
  
  return (
    <div className="container mx-auto p-4 ">
      {image ? (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img
              src={image.download_url}
              alt={image.author}
              className="w-full h-full aspect-square object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-2xl text-gray-800 pb-4">Detalhes da imagem</h1>
            <p className="pb-2">Autor: {image.author}</p>
            <p className="pb-2">
              Dimensões: {image.width} x {image.height}
            </p>
            <p className="pb-2">Url: {image.url}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>Carregando</p>
        </div>
      )}
    </div>
  );
}
