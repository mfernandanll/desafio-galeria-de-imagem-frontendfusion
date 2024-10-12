const images = [
  { id: 1, src: 'https://picsum.photos/id/1018/600/400', alt: 'Imagem 1', author: 'Alice Brown'},
  { id: 2, src: 'https://picsum.photos/id/1025/400/300', alt: 'Imagem 2' , author: 'Alice Brown'},
  { id: 3, src: 'https://picsum.photos/id/1035/400/400', alt: 'Imagem 3' , author: 'Alice Brown'},
  { id: 4, src: 'https://picsum.photos/id/1040/600/500', alt: 'Imagem 4' , author: 'Alice Brown'},
  { id: 5, src: 'https://picsum.photos/id/1042/500/300', alt: 'Imagem 5' , author: 'Alice Brown'},
  { id: 6, src: 'https://picsum.photos/id/1045/400/600', alt: 'Imagem 6' , author: 'Alice Brown'},
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
          grid grid-cols-1 gap-4
          sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="relative overflow-hidden group">
            <img
              src={image.src}
              alt={image.alt}
              className="
                object-cover w-full h-full rounded-lg 
                transition-transform duration-400 
                group-hover:scale-110 group-hover:grayscale"
            />
            <div 
              className="
                absolute cursor-pointer inset-0 p-4
                bg-black text-white bg-opacity-50 
                flex flex-col items-center justify-center 
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100">
              <p>{image.author}</p>
              <a href="#" className="underline mt-2">Ver detalhes</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}