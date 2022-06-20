import React from "react";
import { Link } from "gatsby";

import "../pages/styles.scss";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="container">
      <title>{pageTitle}</title>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              home
            </Link>
            <Link className="navbar-item" to="/algorithms">
              algorithms
            </Link>
          </div>
        </div>
      </nav>
      <main className="container">
        <h1 className="title">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
