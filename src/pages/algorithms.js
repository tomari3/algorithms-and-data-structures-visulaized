import React from "react";
import "./styles.scss";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Algorithms = ({ data }) => {
  return (
    <Layout pageTitle={"Algorithms Page"}>
      {data.allFile.nodes.map((node) => (
        <p key={node.name}>{node.name}</p>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Algorithms;
