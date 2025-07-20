import React, { useState, useEffect } from "react";
import awinging from "./Ui/dummy";
import Resime from "../Components/resime";

const users = {
  name: "Arnold's TECH",
  imageUrl: "/arnold.jpg",
  imageII: "/Screenshot 2025-05-01 181530.png",
};

const movingText = [
  "Hello my name is Arnold...",
  "A Software Developer...",
  "Coding Hobbyist...",
  "I like sharing my knowledge...",
  "Can we collaborate?",
];

const Home = () => {
  const [text, setText] = useState(""); 
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed] = useState(150);

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
  }, [text, isDeleting, index, speed]);

  return (
    <>
      <div className="flex justify-between pb-20 mt-15 p-5 Home">
        <div className="max-w-sm">
          <img
            className="myimage w-[200px] h-[200px] object-cover rounded-full"
            src={users.imageUrl}
            alt={"Photo of " + users.name}
          />
          <h1 className="text-blue-500 font-bold text-4xl">{users.name}</h1>
          <h2 className="text text-xl">
            {text}
            <span>|</span>
          </h2>
          <div className="job">
            <span className="job-first">Transforming</span>
            <br />
            <span className="job-second">Ideas into Code</span>
          </div>
        </div>

        <div className="about max-w-sm items-center ml-5 mb-20">
          <h2 className="sm:items-center text-4xl font-bold text-blue-400 mb-2 flex items-center justify-center">
            About Me
          </h2>
          <div className="sm:items-center sm:flex sm:justify-center w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
          <div className="text-white mt-3">
            <p>
              I'm a self-taught developer from Kenya. I'm currently in my second
              year studying Information Technology at Meru University.
              I specialize in building responsive, accessible, scalable and
              performant digital experiences that make a great impact.
              I blend technology with passion to create solutions that shine.
              My approach combines technical skills with business acumen gained
              from my studies.
            </p>
            <Resime/>
            <div className="swing text-fuchsia-500 border p-4 rounded-xl mt-10 mb-5">
              <b>{awinging.digital}</b>
            </div>
            <b className="mt-150block">
              My journey towards Tech is driven by curiosity and the desire to
              know how to and to create meaningful solutions which are digitized
            </b>
            <div
              className="swing text-fuchsia-500 border p-4 rounded-xl mt-10 data"
              data-aos="flip-up"
            >
              <b>{awinging.future}</b>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen">
          <img
            className="animating w-[200px] h-[200px] object-cover rounded-full mr-5"
            src={users.imageII}
            alt={"photo of " + users.name}
          />
        </div>
      </div>
      



    </>
  );
};

export default Home;
