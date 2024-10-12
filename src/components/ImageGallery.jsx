import { ImageCard } from "./ImageCard";

const images = [
  { id: 1, src: 'https://picsum.photos/id/0/5000/3333', alt: 'Imagem 1', author: 'Alice Brown'},
  { id: 2, src: 'https://picsum.photos/id/1/5000/3333', alt: 'Imagem 2' , author: 'Alice Brown'},
  { id: 3, src: 'https://picsum.photos/id/2/5000/3333', alt: 'Imagem 3' , author: 'Alice Brown'},
  { id: 4, src: 'https://picsum.photos/id/3/5000/3333', alt: 'Imagem 4' , author: 'Alice Brown'},
  { id: 5, src: 'https://picsum.photos/id/4/5000/3333', alt: 'Imagem 5' , author: 'Alice Brown'},
  { id: 6, src: 'https://picsum.photos/id/5/5000/3334', alt: 'Imagem 6' , author: 'Alice Brown'},
  { id: 7, src: 'https://picsum.photos/id/7/4728/3168', alt: 'Imagem 7' , author: 'Alice Brown'},
  { id: 8, src: 'https://picsum.photos/id/8/5000/3333', alt: 'Imagem 8' , author: 'Alice Brown'},
  { id: 9, src: 'https://picsum.photos/id/9/5000/3269', alt: 'Imagem 9' , author: 'Alice Brown'},
  { id: 10, src: 'https://picsum.photos/id/10/2500/1667', alt: 'Imagem 10', author: 'Alice Brown'},
  { id: 11, src: 'https://picsum.photos/id/11/2500/1667', alt: 'Imagem 11' , author: 'Alice Brown'},
];

export function ImageGallery() {
  return (
    <div className="container mx-auto p-4">
      <div 
        className="
          grid grid-cols-1 gap-8
          sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}