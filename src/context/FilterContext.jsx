import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState('all');

  const applyFilter = (type) => {
    setFilter(type);
  };

  return (
    <FilterContext.Provider value={{ filter, applyFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
