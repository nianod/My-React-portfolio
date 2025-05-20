import { use } from "react";
import React, { useState, useEffect } from "react";
import awinging from "./dummy";

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
    <>
    <div className="flex justify-between mt-15 pb-29">
       <div className="mm">
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
    <div className="about max-w-xs items-center ">
        <h2 className="font-bold text-2xl text-blue-800 underline flex items-center justify-center">About me</h2>
        <p>I'm a self-taught developer from Kenya. I'm currently in my first year studying Information Technology at Meru University.
          I specialize in building responsive, accessible, scalable and performant digital experiences that make a great impact.
          I blend technology with passion to create solutions that shine. My approach combines technical skills with business acumen gained from my studies.
          <div className="swing text-fuchsia-500 border-1 p-4 rounded-xl">
              <b> {awinging.digital} </b>
          </div>
          <b>My journey towards Tech is driven by curiosity and the desire to know how to and to create meaningful solutions which are digitized</b>
          <div className="swing text-fuchsia-500 border-1 p-4 rounded-xl">
              <b> {awinging.future} </b>
          </div>
      </p>
    </div>
    </div>
    </>
  );
};

export default Home;
