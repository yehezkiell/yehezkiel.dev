import { graphql, Link } from "gatsby";
import * as React from "react";
import Wave from "../../assets/bg_waves_1.svg";
import AboutSection from "../components/AboutSection";
// import HeroSection from "../components/HeroSection";
import Layout from "../components/layout";
import Seo from "../components/seo";

function HeroSection() {
  return (
    <div className="text-center table h-4/5 w-full mt-20 font-body">
      <div className="table-cell align-bottom ">
        <h1 className="text-5xl animate-fade-in-down">Hi, I’m Yehezkiel!</h1>

        <p className="max-w-lg mt-5 inline-block uppercase font-light leading-5 tracking-widest text-gray-500 animate-fade-in-down">
          Android Engineer <br></br>Based in Jakarta, Indonesia
        </p>
        <Wave />
      </div>
    </div>
  );
}

function LatestBlog({ blogs }) {
  console.log("hehe " + blogs);
  return (
    <div className="bg-neutral-100 w-screen m-auto pb-32 pt-20 font-body">
      <h3 className="w-1/2 mx-auto text-left">LATEST POST</h3>

      {blogs.map((node) => (
        <div className="w-full text-center mx-auto md:text-left md:w-1/2">
          <h1 className="text-4xl mt-7 tracking-wide">
            {node.frontmatter.title}
          </h1>

          <p className="mt-4 px-1 md:mr-10">{node.frontmatter.description}</p>

          <Link to={"/blog/" + node.slug}>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded hover:shadow-lg shadow-slate-400 mt-4">
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
      <HeroSection />
      <LatestBlog blogs={data.allMdx.nodes} />
      <AboutSection className="pb-32 bg-neutral-100" />
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
