import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCode, FaGraduationCap, FaBlog, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";

const user = {
  name: "Arnold",
  prof: "/3c4813fa70d7f0597c00220179dceb9f.png",
  imagUrl: "/public/Screenshot 2025-05-01 181530.png",
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
        <h1 className="text-white text-xl font-bold">{user.name}</h1>
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
          className="md:hidden text-white text-2xl p-2"
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`fixed top-16 left-0 w-1/2 h-full bg-fuchsia-600 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full" }`}
      >
        <div className="flex flex-col p-4 gap-6">
        {navContents.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="Navigation flex items-center font-bold gap-2 text-white text-lg"
          >
            <span className="Round text-black">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
    </header>
  );
};

export default Header;

 

const navContents = [
  { label: "Home", icon: <FaHome/>, path: "/"},
  { label: "Skills", icon: <FaCode/>, path: "/skills" },
  { label: "Education", icon: <FaGraduationCap/>, path: "/education" },
  { label: "Blogs", icon: <FaBlog/>, path: "/blogs" },
  { label: "Projects", icon: <FaProjectDiagram/>, path: "/projects"},
  { label: "Contact", icon : <FaEnvelope/>, path: "/contact" }
  // { label: "mode", icon: <FaMoon/>}
];
