import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import UserTable from "../components/UserTable/UserTable";
import Pagination from "../components/Pagination/Pagination";
import "../styles/pagesStyles/UserListPage.scss";
import Header from "../components/common/Header/Header";

const UserListPage = () => {
  return (
    <div className="teacherListPage_container">
      <Header />
      <SearchBar />
      <UserTable />
      <Pagination />
    </div>
  );
};

export default UserListPage;
