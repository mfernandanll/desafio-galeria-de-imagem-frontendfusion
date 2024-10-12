import { useNavigate } from "react-router-dom";

export function ImageCard({ image }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/details/${image.id}`);
  };

  return (
    <div key={image.id} className="relative overflow-hidden group">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
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
    </div>
  );
}
