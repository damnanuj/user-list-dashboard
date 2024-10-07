import React, { useContext } from "react";
import "./SearchBar.scss";
import FilterComponent from "../Filter/FilterComponent";
import { TeachersContext } from "../../context/TeachersContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(TeachersContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchBar_container">
      <div className="search_filter">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FilterComponent/>
      </div>
    </div>
  );
};

export default SearchBar;