import React from "react";
import Layout from "../../components/layout";
import "../styles.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, graphql } from "gatsby";

const AlgorithmPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="block">
        <p>{data.mdx.frontmatter.problem_number}</p>
        <p>{data.mdx.frontmatter.date}</p>
        <div className="block">
          <Link to={data.mdx.frontmatter.problem_link}>LeetCode</Link>
        </div>
        <div>
          <div className="tags">
            {data.mdx.frontmatter.tags.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </div>
          <div className="tags">
            {data.mdx.frontmatter.companies.map((company) => (
              <span className="tag">{company}</span>
            ))}
          </div>
          <span className="tag is-success">
            {data.mdx.frontmatter.difficulty}
          </span>
        </div>
      </div>
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
        problem_link
        problem_number
        tags
        companies
        difficulty
      }
      body
    }
  }
`;

export default AlgorithmPost;
