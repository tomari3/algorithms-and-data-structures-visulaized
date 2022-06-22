import React from "react";
import "./../styles.scss";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

const Algorithms = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle={"Algorithms Page"}>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2 className="title is-5">
            <Link to={`/algorithms/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
        </article>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default Algorithms;
