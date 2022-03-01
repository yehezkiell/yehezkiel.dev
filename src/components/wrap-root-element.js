import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Code from "./Code";

const components = {
  pre: (props) => <Code {...props} />,
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
