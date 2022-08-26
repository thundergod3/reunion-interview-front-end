import React from "react";

import "./styles.scss";

const Layout = ({ title, children, noMargin }) => (
  <div
    className={`layout-container ${
      noMargin ? "layout-container-no-margin" : ""
    }`}>
    <p className='layout-title'>{title}</p>
    {children}
  </div>
);

export default Layout;
