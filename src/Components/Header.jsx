import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCode,
  FaGraduationCap,
  FaBlog,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaSuperpowers,
} from "react-icons/fa";

const user = {
  name: "Arnold",
  imagUrl: "/Screenshot 2025-05-01 181530.png",
  imageSize: 50,
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-fuchsia-500 p-2 shadow-md rounded-b-xl fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 object-cover rounded-full border-2 border-white"
            src={user.imagUrl}
            alt={"photo of " + user.name}
          />
          <Link to={'/'} className="text-white text-xl font-bold">{user.name}</Link>
        </div>

        <nav className="hidden md:flex gap-6">
          {navContents.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="Navigation flex items-center font-bold gap-1 text-white relative"
            >
              <span>{item.label}</span>
              <span className="Round text-black">{item.icon}</span>
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl p-2 cursor-pointer"
        >
          <FaBars />
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 backdrop-blur-md z-30"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
      <div
        className={`rounded shadow-md fixed top-0 right-0 w-1/2 h-[100%] bg-[#0f0453] transform transition-all duration-500 ease-in-out z-40 
     ${
      isOpen
        ? "translate-x-0 opacity-100 scale-100"
        : "translate-x-full opacity-0 scale-95"
    } flex flex-col justify-between`}
      >
        <button
          className="right-4 text-2xl absolute text-fuchsia-500 font-bold cursor-pointer hover:rotate-45 transition-transform duration-300"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col p-2 mt-7">
          {navContents.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="border-b-[1.5px] p-4 flex items-center font-bold gap-2 text-fuchsia-500 text-lg rounded-md hover:bg-blue-900"
            >
              <span className="Round text-white">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {isOpen && (
          <div className="p-4 flex justify-center ">
            <a
              className="text-white flex items-center gap-1"
              href="https://we-re-arnold-official.vercel.app/"
              target="__blank"
              rel="noreferrer"
            >
              <FaSuperpowers /> Support us
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

const navContents = [
  { label: "Home", icon: <FaHome />, path: "/" },
  { label: "Skills", icon: <FaCode />, path: "/skills" },
  { label: "Education", icon: <FaGraduationCap />, path: "/education" },
  { label: "Blogs", icon: <FaBlog />, path: "/blogs" },
  { label: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
  { label: "Contact", icon: <FaEnvelope />, path: "/contact" },
  // { label: "mode", icon: <FaMoon/>}
];









