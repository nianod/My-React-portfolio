import React from "react";
import { FaHome,FaCode, FaGraduationCap, FaBlog, FaProjectDiagram, FaEnvelope, FaMoon } from "react-icons/fa"

const user = {
  name: "Arnold",
  imageURL: "/3c4813fa70d7f0597c00220179dceb9f.png",
  imageSize: 50,
};
const Header = () => {
  // const modeChange = () => {
  //   alert("changing,,,,")
  // }
  return (
    <header className="bg-fuchsia-500  p-2 shadow-md rounded-b-xl  fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 object-cover rounded-full border-2 border-white"
            src={user.imageURL}
            alt={"photo of " + user.name}
          />
          <h1 className="text-white text-xl font-bold">{user.name}</h1>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          {navContents.map((item, index) => (
            <a
              key={index}
              href={`#${item.label.toLowerCase()}`}
              className="flex items-center font-bold gap-1 text-white hover:text-blue-500 transition-colors"
            >
              <span>{item.label}</span>
              <span className="Round text-black">{item.icon}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};


export default Header;
 

const navContents = [
  { label: "Home", icon: <FaHome/>},
  { label: "Skills", icon: <FaCode/> },
  { label: "Education", icon: <FaGraduationCap/> },
  { label: "Blogs", icon: <FaBlog/> },
  { label: "Projects", icon: <FaProjectDiagram/>},
  { label: "Contact", icon : <FaEnvelope/> },
  { label: "mode", icon: <FaMoon/>}
];
