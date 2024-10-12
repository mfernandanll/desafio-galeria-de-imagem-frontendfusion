import { useImages } from "../context/ImageContext";
import { ImageCard } from "./ImageCard";

export function ImageGallery() {
  const { images } = useImages();

  return (
    <div className="container mx-auto p-4">
      <div 
        className="
          grid grid-cols-1 gap-8
          sm:grid-cols-2 lg:grid-cols-3">
        {
          images &&
          images.map((image) => (
            <ImageCard key={image.id} image={image} />
          )) 
        }
      </div>
    </div>
  );
}