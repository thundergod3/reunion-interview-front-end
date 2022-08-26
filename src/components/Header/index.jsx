import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router";

import { navList } from "./constants";

import "./styles.scss";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const handleActiveLink = useCallback(
    (link) => link === location.pathname,
    [location.pathname]
  );

  return (
    <div className='header-container'>
      {navList.map((record) => (
        <div
          key={record?.link}
          className={`header-nav-item ${
            handleActiveLink(record?.link) ? "header-nav-item-active" : ""
          }`}
          onClick={() => history.push(record?.link)}>
          <p>{record?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Header;
