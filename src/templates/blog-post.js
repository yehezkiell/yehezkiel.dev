import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Template({ data }) {
  console.log(data.slug);

  console.log("data " + data);

  return (
    <Layout pageTitle="About">
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <div className="blog-container pt-20">
        <h1 className="pt-4">{data.mdx.frontmatter.title}</h1>
        <h4 className="pt-2 pb-5 text-base">
          Posted by on {data.mdx.frontmatter.date}
        </h4>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date
      }
      id
    }
  }
`;
