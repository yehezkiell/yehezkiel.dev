import { createElement } from "react";
import { wrapRootElement as wrap } from "./src/components/wrap-root-element";

const applyDarkModeClass = `
(function() {
  try {
     var mode = localStorage.getItem('theme');
              if (mode === 'dark') {
                document.documentElement.classList.add('dark');
              }
    console.log("INJECTED")
  } catch (e) {
       console.log("INJECTED FAILED")
}
})();
`;

export const wrapRootElement = wrap;
export const onRenderBody = ({ setPreBodyComponents }) => {
    const script = createElement("script", {
        dangerouslySetInnerHTML: {
            __html: applyDarkModeClass,
        },
    });
    setPreBodyComponents([script]);
};
