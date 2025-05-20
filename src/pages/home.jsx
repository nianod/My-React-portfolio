import { use } from "react";
import React, { useState, useEffect } from "react";

const users = {
  name: "Arnold's TECH",
  imageUrl: "/arnold.jpg",
};

const movingText = [
  "Hello my name is Arnold...",
  "A fronted Developer...",
  "Am a coding and programming Hobyyst...",
  "I like sharing my knowledge, can we collaborate?",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentString = movingText[index];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentString.length) {
        timeout = setTimeout(() => {
          setText(currentString.substring(0, text.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentString.substring(0, text.length - 1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % movingText.length);
      }
    }

    return () => clearTimeout(timeout);
  });
  return (
    <div className="mt-15">
      <img
        className="myimage w-30 h-30 object-cover rounded-full"
        src={users.imageUrl}
        alt={"Photo of " + users.name}
      />
       <h1 className="text-blue-500 font-bold text-4xl"> {users.name} </h1>
      <h2>
        {text}
        <span>|</span>
      </h2>
      <div className="job">
        <span className="job-first">Transforming</span><br />
        <span className="job-second">Ideas into Code</span>
      </div>

      
    </div>
  );
};

export default Home;
