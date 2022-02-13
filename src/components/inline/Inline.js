import * as React from "react";
import * as containerStyles from "./Inline.module.css";

function Inline({ children }) {
  return <span className={containerStyles.spanContainer}>{children}</span>;
}

// Step 3: Export your component
export default Inline;
