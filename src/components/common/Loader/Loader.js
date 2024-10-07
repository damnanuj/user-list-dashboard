import React from "react";
import { Spin } from "antd";


const Loader = () => (
  <div className="loader-container">
    {/* antD Loader component*/}
    <Spin size="large" />
  </div>
);

export default Loader;