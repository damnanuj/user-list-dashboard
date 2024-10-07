import React, { useContext } from "react";
import { Pagination as Pages } from "antd";
import { TeachersContext } from "../../context/TeachersContext";
import "./Pagination.scss";

const Pagination = () => {
  const { currentPage, setCurrentPage, pageSize, setPageSize, totalTeachers } =
    useContext(TeachersContext);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <div className="pagination_container">
      <Pages
        current={currentPage}
        total={totalTeachers}
        pageSize={pageSize}
        onChange={onPageChange}
      />
    </div>
  );
};

export default Pagination;
