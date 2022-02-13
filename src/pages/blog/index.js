import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

function BlogPage({ data }) {
  const height = (width * 16) / 9;
  const width = 300;

  return (
    <Layout pageTitle="My Blog Posts">
      <Seo title="All Posts" />
      <div className="w-full mx-auto xl:w-7/12 lg:w-8/12 pt-10 pb-32">
        {data.allMdx.nodes.map((node) => (
          <Link to={node.slug}>
            <div className="flex flex-col md:px-0 lg:flex-row justify-center items-center gap-6 mb-10 group lg:hover:scale-105 transition">
              <div className="px-2 md:p-4 lg:p-0">
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  alt="test"
                  className="object-contain h-60 w-full md:h-96 lg:w-96 xl:w-60 xl:h-60 lg:rounded-xl"
                />
              </div>

              <div className="bg-white w-screen text-center lg:text-left ">
                <h1 className="text-3xl lg:group-hover:underline">
                  {node.frontmatter.title}
                </h1>
                <h2 className="font-extralight text-lg text-slate-500">
                  Posted on: {node.frontmatter.date}
                </h2>
                <p className="mx-auto w-screen mt-4 md:w-3/4 lg:w-5/6 lg:mx-0">
                  Posted: {node.frontmatter.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        slug
        id
        frontmatter {
          date
          title
          description
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
