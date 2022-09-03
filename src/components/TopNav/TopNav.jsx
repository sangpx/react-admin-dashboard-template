import React from "react";
import { Link } from "react-router-dom";

import "./TopNav.scss";

import Dropdown from "../Dropdown/Dropdown";

import notifications from "../../assets/JsonData/notification.json";
import user_menu from "../../assets/JsonData/user_menus.json";
import user_image from "../../assets/images/batman.png";

//render notification
const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

//current user
const curr_user = {
  display_name: "BatMan",
  image: user_image,
};

//render user_menus
const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="user" />
    </div>

    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

//renderUserMenu
const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span className={item.content}></span>
    </div>
  </Link>
);

function TopNav() {
  return (
    <div className="topnav">
      {/* Top Nav Search */}
      <div className="topnav__search">
        <input
          className="topnav__search-input"
          type="text"
          placeholder="Search..."
        />
        <i className="topnav__search-icon bx bx-search"></i>
      </div>

      {/* Top Nav Right */}
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* Dropdown User */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>

        <div className="topnav__right-item">
          {/* dropdown notifications */}
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>

        <div className="topnav__right-item">
          {/* Theme Setting */}
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
