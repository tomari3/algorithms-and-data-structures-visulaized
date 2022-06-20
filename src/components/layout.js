import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import "../pages/styles.scss";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className="title is-1">{data.site.siteMetadata.title}</header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/algorithms">
              Algorithms
            </Link>
            <Link className="navbar-item" to="/data-structures">
              Data Structures
            </Link>
          </div>
        </div>
      </nav>
      <main className="container is-fluid">
        <h1 className="title">{pageTitle}</h1>
        <div className="content">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
