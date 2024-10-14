import { Heart, MagnifyingGlass } from "phosphor-react";
import { useFilter } from "../context/FilterContext";

export function Header() {
  const { filter, applyFilter, handleSearch } = useFilter();

  const handleFilterFavoritesImages = () => {
    const newFilter = filter === 'favorites' ? 'all' : 'favorites';
    applyFilter(newFilter);
  };

  const handleSearchImages = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value.trim(); 

    if (query) { 
      handleSearch(query);
    } else {
      applyFilter('all');
    }
  };

  return (
    <header className="border border-b-gray-400">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center gap-8 max-sm:gap-4">
        <a href="/" aria-label="PicFinder logo, vá para a homepage" className="text-2xl font-bold max-sm:text-base">
          PicFinder
        </a>

        <form className="flex-grow" role="search" aria-label="Busque fotos por autor" onSubmit={handleSearchImages}>
          <label htmlFor="search" className="sr-only">Busque fotos por autor</label>
          <div className="relative">
            <input 
              type="text" 
              id="search" 
              className="w-full rounded-lg py-2 pl-2 bg-gray-300 placeholder:text-gray-600" 
              placeholder="Busque fotos por autor" 
            />
            
            <button 
              type="submit" 
              className="absolute top-[0.625rem] right-2 text-gray-600" 
              aria-label="Pesquisar">
              <MagnifyingGlass size={20} />
            </button>
          </div>
        </form>

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
