import React from "react";
import { Pagination as Pages } from "antd";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination_container">
        <Pages defaultCurrent={1} total={50} />
    </div>
  );
};

export default Pagination;
