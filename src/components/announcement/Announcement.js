import * as React from "react";
import * as containerStyles from "./Announcement.module.css";

function Announcement({ children, type, className }) {
  console.log("type : " + type);
  console.log("type : " + children);

  return (
    <div
      className={
        "w-full  mx-auto my-4 " +
        className +
        " " +
        containerStyles.announcementContainer
      }
    >
      <div>{children}</div>
    </div>
  );
}

// Step 3: Export your component
export default Announcement;
