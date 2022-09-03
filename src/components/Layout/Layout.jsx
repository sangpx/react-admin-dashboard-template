import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Routers from "../Routes";
import TopNav from "../TopNav/TopNav";

import "./Layout.scss";

import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
