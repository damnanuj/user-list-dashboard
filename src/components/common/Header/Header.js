import React from "react";
import "./Header.scss";

import profile from "../../../assests/profileVrctor.png";
import bell from "../../../assests/Notification.png";

const Header = () => {
  return (
    <div className="header_container">
      <h2 className="welcome">Welcome, User !</h2>
      <div>
        {" "}
        <img src={bell} alt="bell" />
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
