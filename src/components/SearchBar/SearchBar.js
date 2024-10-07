import React, { useContext, useState } from "react";
import "./SearchBar.scss";
import FilterComponent from "../Filter/FilterComponent";
import { TeachersContext } from "../../context/TeachersContext";

const SearchBar = () => {
  const { debouncedSearch } = useContext(TeachersContext);
  const [inputValue, setInputValue] = useState(""); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); //just local state to faster inputand change
    debouncedSearch(value); 
  };

  return (
    <div className="searchBar_container">
      <div className="search_filter">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <FilterComponent />
      </div>
    </div>
  );
};

export default SearchBar;
