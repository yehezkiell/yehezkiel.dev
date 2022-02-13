import { Link } from "gatsby";
import * as React from "react";
import Icon from "../../assets/v1.svg";

function NavBar() {
  return (
    <nav className="fixed top-0 p-3 w-screen max-w-full md:max-w-full bg-white/80 flex justify-between lg:justify-around items-center backdrop-blur-3xl z-10 font-body">
      <div className="flex items-center hover:scale-110 transition hover:duration-200">
        <a href="#">
          <Icon className="h-full" />
        </a>
      </div>

      <div>
        <ul className="list-none flex">
          <li className="mr-5 hover:scale-105 transition hover:duration-200	">
            <Link className="hover:underline" to="/">
              Home
            </Link>
          </li>
          <li className="mr-5 hover:scale-105 transition hover:duration-200	">
            <Link className="hover:underline" to="/#about">
              About
            </Link>
          </li>
          <li className="mr-5 hover:scale-105 transition hover:duration-200	">
            <Link className="hover:underline" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
