import { createContext, useState } from "react";
import { Funcionario } from "src/models";

export type SearchContextProps = {
  searchTerm: string;
  setSearchTerm: Function;
};

export const SearchContext = createContext<SearchContextProps>({
  searchTerm: '',
  setSearchTerm: () => {}
})

const search = ''

const SearchProvider: React.FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(search);
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
