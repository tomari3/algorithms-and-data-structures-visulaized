import React from "react";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, graphql } from "gatsby";

export const AlgorithmPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <Link to={data.mdx.frontmatter.problem_link}>LeetCode</Link>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        problem_link
        problem_number
      }
      body
    }
  }
`;

export default AlgorithmPost;
