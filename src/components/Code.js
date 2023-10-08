import rangeParser from "parse-numeric-range";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import theme from "prism-react-renderer/themes/nightOwl";
import React from "react";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-java");

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const Code = (props) => {
  const className = props.children.props.className || "";
  const code = props.children.props.children.trim();
  const language = className.replace(/language-/, "");
  const file = props.children.props.file;
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ""
  );
  const showLineNumbers = props.children.props.lineNumbers;

  return (
    <div
      style={{
        background: "#011627",
        borderRadius: "0.5rem",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <div
        className={"text-left px-4 italic" + (file && "py-2")}
        style={{
          color: "#9d9d9d",
          fontFamily:
            "SFMono-Medium, SF Mono, Segoe UI Mono, Roboto Mono, Ubuntu Mono, Menlo, Consolas, Courier, monospace !important",
        }}
      >
        {file && `${file}`}
      </div>
      {file && <hr className="bg-white my-1"></hr>}
      <div
        className="text-base overflow-auto p-4"
        style={{
          background: "#011627",
          borderRadius: "0.5rem",
          fontFamily:
            "SFMono-Medium, SF Mono, Segoe UI Mono, Roboto Mono, Ubuntu Mono, Menlo, Consolas, Courier, monospace !important",
        }}
      >
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="float-left min-w-full bg-transparent mr-4"
              style={{
                ...style,
              }}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    background: highlights(i) ? "#00f5c426" : "transparent",
                    display: "block",
                  }}
                >
                  {showLineNumbers && (
                    <span
                      style={{
                        textAlign: "right",
                        paddingRight: "1em",
                        userSelect: "none",
                        opacity: 0.5,
                      }}
                    >
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;
