import React, { useContext } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import UserTable from "../components/UserTable/UserTable";
import Pagination from "../components/Pagination/Pagination";
import "../styles/pagesStyles/UserListPage.scss";
import Header from "../components/common/Header/Header";
import { TeachersContext } from "../context/TeachersContext";

const UserListPage = () => {
  const { filteredTeachers } = useContext(TeachersContext); 

  return (
    <div className="teacherListPage_container">
      <Header />
      <SearchBar />
      {/* ===>>Passing filteredTeachers Data to Table */}
      <UserTable teachers={filteredTeachers} /> 
      <Pagination />
    </div>
  );
};

export default UserListPage;
