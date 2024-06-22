import { graphql, Link } from "gatsby";
import * as React from "react";
import Wave from "../../assets/bg_waves_1.svg";
import AboutSection from "../components/AboutSection";
// import HeroSection from "../components/HeroSection";
import Layout from "../components/layout";
import Seo from "../components/seo";

function HeroSection() {
  return (
    <div className="text-center h-5/6 w-full">
      <div className="table w-full h-full pt-32">
        < div className="table-cell align-bottom w-full" >
          <h1 className="text-5xl animate-fade-in-down text-primary">Hi, I’m Yehezkiel!</h1>

          <p className="max-w-lg mt-5 inline-block uppercase font-light leading-5 tracking-widest text-gray-500 dark:text-gray-400 animate-fade-in-down">
            Android Engineer <br></br>Based in Jakarta, Indonesia
          </p>
          <Wave className="fill-neutral-100 dark:fill-gray-800" />
        </div>
      </div>

    </div>
  );
}

function LatestBlog({ blogs }) {
  return (
    <div className="bg-neutral-100 dark:bg-gray-800 w-screen font-body mt-auto pb-20">

      <h3 className="text-xl font-medium w-1/2 mx-auto text-center md:text-left text-black dark:text-white">LATEST POST</h3>

      {blogs.map((node) => (
        <div className="w-full text-center mx-auto md:text-left md:w-1/2 mt-8">
          <h1 className="text-4xl mt-7 tracking-wide text-black dark:text-white">
            {node.frontmatter.title}
          </h1>

          <p className="mt-4 px-1 md:mr-10 text-black dark:text-white">{node.frontmatter.description}</p>

          <Link to={"/blog/" + node.slug}>
            <button className="bg-sky-600 dark:bg-gray-700 hover:bg-sky-700 text-white px-4 py-2 rounded hover:shadow-lg shadow-slate-400 mt-4">
              Continue Reading
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

function IndexPage({ data }) {
  console.log(data);

  return (
    <Layout pageTitle={data.site.siteMetadata.title}>
      <Seo title="Home" />
      <div className="pt-20"></div>
      <HeroSection />
      <LatestBlog blogs={data.allMdx.nodes} />
      <AboutSection className="pb-24 bg-neutral-100 dark:bg-gray-800" />
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
      nodes {
        slug
        id
        frontmatter {
          date
          title
          description
        }
      }
    }
  }
`;

// Step 3: Export your component
export default IndexPage;
