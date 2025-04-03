import { useState, InputHTMLAttributes } from "react";
import { SearchInputContainer } from "./styles";

export const SearchInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchInputContainer
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      {...props}
    />
  );
};
