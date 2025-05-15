import React from "react";
import "./header.css";

// const navContent = [
//     {label: "Home", to: "/", icon: Home}
// ]

const user = {
  name: "Arnold",
  imageURL: "3c4813fa70d7f0597c00220179dceb9f.png",
  imageSize: 50,
};
  
function Profile() {
  return (
    <>
      <div className="Profile-section">
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
        <div className="navs">
          <nav>
            {navContents.map((item, index) => (
              <a key={index} href={`#${item.label.toLocaleLowerCase()}`}>
                {item.label}
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
  { label: "Home" },
  { label: "Skills" },
  { label: "Education" },
  { label: "Blogs" },
  { label: "Projects" },
  { label: "Contact" },
];

