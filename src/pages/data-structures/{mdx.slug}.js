import React from "react";
import Layout from "../../components/layout";
import "../styles.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

const DataStructurePost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;

export default DataStructurePost;
