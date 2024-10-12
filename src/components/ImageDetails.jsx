import { useParams } from "react-router-dom";

const images = [
  { id: 1, src: 'https://picsum.photos/id/0/5000/3333', width: 5000, height: 3333, url: "https://unsplash.com/photos/tAKXap853rY", alt: 'Imagem 1', author: 'Alice Brown'},
  { id: 2, src: 'https://picsum.photos/id/1/5000/3333', width: 5000, height: 3333, url: "https://unsplash.com/photos/tAKXap853rY", alt: 'Imagem 2' , author: 'Alice Brown'},
];

export function ImageDetails() {
  const { imageId } = useParams()
  console.log(imageId);
  

  return (
    <div className="container mx-auto p-4 grid grid-cols-2 gap-8">
      <div>
        <img src={images[imageId].src} alt="" className="w-full h-full aspect-square object-cover rounded-lg"/>
      </div>
      <div>
        <h1 className="text-2xl text-gray-800 pb-4">Detalhes da imagem</h1>
        <p className="pb-2">Autor: {images[imageId].author}</p>
        <p className="pb-2">Dimensões: {images[imageId].width} x {images[imageId].height}</p>
        <p className="pb-2">Url: {images[imageId].url}</p>
      </div>
    </div>
  )
}