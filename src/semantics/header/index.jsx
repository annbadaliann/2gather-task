import React from "react";
import search from "../../assets/images/search.png";
import notification from "../../assets/images/notification.png";
import user from "../../assets/images/user.png";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="switch-sidebar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="header-info-side">
        <img src={search} alt="search" />
        <img src={notification} alt="notification" />
        <div className="user-info">
          <img src={user} alt="user" />
          <p>Anna Smith</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
