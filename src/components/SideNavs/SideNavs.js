import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideNavs.scss";

import company_logo from "../../assests/company-Logo.png";
import teachers from "../../assests/project.png";
import department from "../../assests/Maskgroup.png";
import library from "../../assests/Group798.png";
import addteacher from "../../assests/plus.png";

const navLinks = [
  { name: "Teacher", icon: teachers, path: "/" },
  { name: "Department", icon: department, path: "/department" },
  { name: "Library", icon: library, path: "/library" },
  { name: "Add Teacher", icon: addteacher, path: "/add-teacher" },
];

const SideNavs = ({ isNavOpen, setIsNavOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar container ===============*/}
      <div className={`sideNavs_container ${isNavOpen ? "open" : "closed"}`}>
        <div className="top_logo_menuBtn">
          <img className="company_logo" src={company_logo} alt="company logo" />
          <h2>QMS</h2>
        </div>

        {/* Navigation Links ==========*/}
        <nav className="navLinks">
          {navLinks.map((link, index) => (
            <Link className={`nav ${location.pathname === link.path ? "active_nav" : ""}`} key={index} to={link.path}>
              <img src={link.icon} aria-label={link.name} alt={link.name} />
              <p className={location.pathname === link.path ? "active_nav" : ""}>
                {link.name}
              </p>
            </Link>
          ))}
        </nav>
      </div>

      {/* Button to toggle sidebar */}
      <span
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="toggleNavBtn material-icons-round"
      >
        {isNavOpen ? "close" : "menu"}
      </span>
    </>
  );
};

export default SideNavs;
