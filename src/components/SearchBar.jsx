import { MagnifyingGlass } from "phosphor-react";
import { useFilter } from "../context/FilterContext";

export function SearchBar() {
  const { applyFilter, handleSearch } = useFilter();

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
  )
}