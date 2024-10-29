import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Navbar = () => {
  const links = [
    <>
      <li>
        <a href="">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="">
          <FaFacebookSquare />
        </a>
      </li>
    </>,
  ];
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <a className=" text-4xl">Fr</a>
      </div>

      <div className="navbar-end ">
        <ul className="list-none flex flex-row gap-5 items-center text-2xl">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
