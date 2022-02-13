import * as React from "react";
import FooterSection from "../FooterSection";
import NavBar from "../NavBar";

function Layout(props) {
  return (
    <main>
      <title>{props.pageTitle}</title>

      <div className="container relative">
        <NavBar />
        <div className="h-screen w-full mt-20">
          {props.children}
          <FooterSection />
        </div>
      </div>
    </main>
  );
}

// Step 3: Export your component
export default Layout;
