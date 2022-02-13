// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Seo title="About" />
      <div className="h-screen text-center">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </div>
    </Layout>
  );
};
// Step 3: Export your component
export default AboutPage;
