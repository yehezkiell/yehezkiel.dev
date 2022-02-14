import {
  faGithubSquare,
  faLinkedin,
  faMedium,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

function AboutSection({ className = "" }) {
  return (
    <div id="about" className={"w-full text-center mx-auto " + className}>
      <h2 className="text-4xl font-bold pt-20 font-body">About Me</h2>
      <div className="rounded-full p-2 bg-white w-56 h-56 mt-8 m-auto bg-center">
        <StaticImage
          style={{ borderRadius: "100%" }}
          placeholder="blurred"
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../../assets/avatar-yehez.png"
        />
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <a href="https://www.linkedin.com/in/yehezkiell/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="hover:scale-105"
          />
        </a>
        <a href="https://medium.com/@yehezkiell" target="_blank">
          <FontAwesomeIcon
            icon={faMedium}
            size="2x"
            className="hover:scale-105"
          />
        </a>
        <a href="https://github.com/yehezkiell" target="_blank">
          <FontAwesomeIcon
            icon={faGithubSquare}
            size="2x"
            className="hover:scale-105"
          />
        </a>
        <a href="https://twitter.com/yehezkiel_l" target="_blank">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            size="2x"
            className="hover:scale-105"
          />
        </a>
      </div>

      <p className="max-w-xl mt-5 inline-block font-body font-light leading-7 tracking-wide px-2 md:px-0">
        I'm an android software engineer at Tokopedia. After obtaining my
        Major's Degree in computer science, I gained opportunity to work as
        Android Developer, where I used Java and Kotlin intensively during my
        professional life. <br></br>
        <br></br>I dedicated and created this website to fulfill my desire to
        write articles about android and any other tech stuffs.
      </p>
    </div>
  );
}

export default AboutSection;
