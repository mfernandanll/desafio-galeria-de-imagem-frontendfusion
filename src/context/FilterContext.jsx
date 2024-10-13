import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState("");

  const applyFilter = (type) => {
    setFilter(type);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilter("search"); 
  };

  return (
    <FilterContext.Provider value={{ filter, applyFilter, handleSearch, searchQuery }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
