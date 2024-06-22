import {
  faGithubSquare,
  faLinkedin,
  faMedium,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

function AboutSection({ className = "" }) {
  return (
    <div id="about" className={"w-full text-center mx-auto " + className}>
      <h2 className="text-4xl font-bold pt-20 font-body text-black dark:text-white">About Me</h2>
      <div className="rounded-full p-2 bg-white dark:bg-gray-800 w-56 h-56 mt-8 m-auto bg-center">
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
            size="3x"
            className="hover:scale-105 text-black dark:text-gray-500"
          />
        </a>
        <a href="https://medium.com/@yehezkiell" target="_blank">
          <FontAwesomeIcon
            icon={faMedium}
            size="3x"
            className="hover:scale-105 text-black dark:text-gray-500"
          />
        </a>
        <a href="https://github.com/yehezkiell" target="_blank">
          <FontAwesomeIcon
            icon={faGithubSquare}
            size="3x"
            className="hover:scale-105 text-black dark:text-gray-500"
          />
        </a>
        <a href="https://twitter.com/yehezkiel_l" target="_blank" >
          <FontAwesomeIcon
            icon={faTwitterSquare}
            size="3x"
            className="hover:scale-105 text-black dark:text-gray-500 ra"
          />
        </a>
      </div>

      <p className="max-w-xl mt-5 inline-block font-body font-light leading-7 tracking-wide px-2 md:px-0 text-black dark:text-white">
        I am an Android software engineer at Tokopedia. After obtaining my degree in Computer Science, I had the opportunity to work as an Android Developer, where I have used Java and Kotlin extensively throughout my professional career.

        <br></br><br></br>I created this website to fulfill my passion for writing articles about Android development and various other tech topics.
      </p>
    </div >
  );
}

export default AboutSection;
