import React from "react";
import Layout from "../../components/layout";
import "../styles.scss";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

const AlgorithmPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="block">
        <p>{data.mdx.frontmatter.problem_number}</p>
        <p>{data.mdx.frontmatter.date}</p>
        <div className="block">
          <a href={data.mdx.frontmatter.problem_link}>LeetCode</a>
        </div>
        <div>
          <div className="tags">
            {data.mdx.frontmatter.tags.map((tag) => (
              <span key={tag} className="button tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="tags">
            {data.mdx.frontmatter.companies.map((company) => (
              <span key={company} className="button tag">
                {company}
              </span>
            ))}
          </div>
          <span className={`button tag is-${data.mdx.frontmatter.difficulty}`}>
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
