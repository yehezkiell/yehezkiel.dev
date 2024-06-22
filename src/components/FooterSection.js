import * as React from "react";

function FooterSection({ className = "" }) {
  console.log("name " + className);
  return (
    <div
      className={"w-screen table text-center h-48 bg-neutral-50 dark:bg-gray-900 " + className}
    >
      <p className="table-cell text-gray-600 dark:text-white align-middle font-bold text-lg">
        Copyright © Yehezkiel 2022
      </p>
    </div>
  );
}

export default FooterSection;
