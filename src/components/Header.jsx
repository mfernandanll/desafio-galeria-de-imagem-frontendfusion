import { Heart } from "phosphor-react";
import { useFilter } from "../context/FilterContext";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { filter, applyFilter } = useFilter();

  const handleFilterFavoritesImages = () => {
    const newFilter = filter === 'favorites' ? 'all' : 'favorites';
    applyFilter(newFilter);
  };

  return (
    <header className="border border-b-gray-400">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center gap-8 max-sm:gap-4">
        <a href="/" aria-label="PicFinder logo, vá para a homepage" className="text-2xl font-bold max-sm:text-base">
          PicFinder
        </a>

        <SearchBar />

        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-4">
            <li>
              <button 
                className="flex items-center gap-1" 
                placeholder={filter === 'favorites' ? "Mostrar todas as imagens" : "Veja suas imagens favoritadas"}
                aria-label={filter === 'favorites' ? "Mostrar todas as imagens" : "Veja suas imagens favoritadas"}
                onClick={handleFilterFavoritesImages}
              >
                <span className="max-sm:hidden">Favoritas</span>
                <Heart size={20} weight="fill" className="text-red-700" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
