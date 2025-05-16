import React from "react";
import { FaHome,FaCode, FaGraduationCap, FaBlog, FaProjectsDiagram, FaEnvelope } from "react-icons/fa"
import "./header.css";

// const navContent = [
//     {label: "Home", to: "/", icon: Home}
// ]

const user = {
  name: "Arnold",
  imageURL: "/3c4813fa70d7f0597c00220179dceb9f.png",
  imageSize: 50,
};

function Profile() {
  return (
    <>
    
      <div className="Profile-section">
        <div className="image">
          <h1>{user.name}</h1>
          <img
            className="ownerimage"
            src={user.imageURL}
            alt={"photo of " + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize,
            }}
          />
        </div>
        <div className="navs">
          <nav>
            {navContents.map((item, index) => (
              <a key={index} href={`#${item.label.toLocaleLowerCase()}`}>
                {item.label}
                <span>{item.icon} </span>
                <span>{item.label} </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Profile;

const navContents = [
  { label: "Home", icoN: <FaHome/>},
  { label: "Skills", icon: <FaCode/> },
  { label: "Education", icon: <FaGraduationCap/> },
  { label: "Blogs", icon: <FaBlog/> },
  { label: "Projects", icon: <FaProjectsDiagram/>},
  { label: "Contact", icon : <FaEnvelope/> },
];
