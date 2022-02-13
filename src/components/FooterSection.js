import * as React from "react";

function FooterSection({ className = "" }) {
  console.log("name " + className);
  return (
    <div
      className={"w-screen table text-center h-1/4 bg-slate-500 " + className}
    >
      <p className="table-cell text-white align-middle font-bold text-lg">
        Copyright © Yehezkiel 2022
      </p>
    </div>
  );
}

export default FooterSection;
