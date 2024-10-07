import React, { useContext } from "react";
import "./SearchBar.scss";
import FilterComponent from "../Filter/FilterComponent";
import { TeachersContext } from "../../context/TeachersContext";

const SearchBar = () => {
  const { searchString, setSearchString } = useContext(TeachersContext);

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <div className="searchBar_container">
      <div className="search_filter">
        <input
          type="text"
          placeholder="Search..."
          value={searchString}
          onChange={handleSearchChange}
        />
        <FilterComponent/>
      </div>
    </div>
  );
};

export default SearchBar;