import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavs from "../components/SideNavs/SideNavs";

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="main_layout_container">
      <div className="left_nav">
        <SideNavs isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>

      <div className={`right_outlets ${isNavOpen ? "blurred" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
