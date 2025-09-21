import projectsc from "./Ui/projects";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const moreProjects = {
  url: "https://github.com/nianod?tab=repositories",
};
let handOnProjects = [
  {
    label: "Online Rental Management",
    source: "https://github.com/nianod/Stack-Rent/",
    live: "https://online-renting-six.vercel.app",
    photo: "Screenshot 2025-05-21 153717.png",
    name: "Online Rental Management",
    mode: "public",
  },
  {
    label: "Chatbot",
    source: "https://github.com/nianod/Express-Ai-Chatbot",
    live: "https://express-ai-chatbot.vercel.app/",
    photo: "chatbot.jpeg",
    name: "AI Chatbot",
    mode: "public",
  },
  {
    label: "Youtube Video Downloader",
    source: "https://github.com/nianod/Youtube-downloader",
    live: "https://youtube-video-downloader-two-delta.vercel.app/",
    photo: "images.jpeg",
    name: "Youtube Video Downloader",
    mode: "public",
  },
  {
    label: "Github profile Finder",
    source: "https://github.com/nianod/Github-Profile-Finder",
    live: "https://github-profile-finder-smoky.vercel.app/",
    photo: "Screenshot 2025-06-13 101018.png",
    name: "Github profile Finder",
    mode: "public",
  },
  {
    label: "Airbnb looks",
    source: "https://github.com/nianod/Airbnb-clone",
    live: "https://airbnb-look-alike.vercel.app//",
    photo: "Screenshot 2025-06-15 132700.png",
    name: "Airbnb look alike",
    mode: "public",
  },
  {
    label: "Car shelf",
    source: "https://github.com/nianod/Milele-Car-Shelf",
    live: "https://milele-car-shelf.vercel.app/",
    photo: "Screenshot 2025-06-18 002149.png",
    name: "Car shelf",
    mode: "public",
  },
  {
    label: "Chat app",
    source: "https://github.com/nianod/Supabase-Chat-APP",
    live: "https://github.com/nianod/Supabase-Chat-APP",
    photo: "Screenshot 2025-08-01 231103.png",
    name: "Chat App",
    mode: "public",
  },
  {
    label: "E-commerce site",
    source: "https://github.com/nianod/MERN-E-COMMERCE",
    live: "https://github.com/nianod/MERN-E-COMMERCE",
    photo: "download.jpeg",
    name: "E-commerce site",
    mode: "public",
  },
  {
    label: "Neighbourhood",
    source: "https://github.com/nianod/Help-board-hub",
    live: "https://github.com/nianod/Help-board-hub",
    photo: "help-1013700_1280.webp",
    name: "Neighbourhood Help Hub",
    mode: "private",
  },
];
const Projects = () => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 10;

    const type = () => {
      if (currentIndex <= projectsc.head.length) {
        setDisplayedText(projectsc.head.substring(0, currentIndex));
        currentIndex++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, []);
  return (
    <>
      <div className="mt-15 flex flex-col items-center">
        <h1 className="flex justify-center items-center text-4xl font-bold text-blue-400 mb-2 ">
          {" "}
          My Projects
        </h1>
        <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
        <p className="text-white text-center"> {displayedText} </p>
      </div>
      <div
        data-aos="fade-up-left"
        className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 px-6 py-10"
      >
        {handOnProjects.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-500 rounded-lg p-4 bg-black shadow-lg hover:scale-105 transition"
          >
            <img
              src={item.photo}
              alt={`Screenshot of ${item.label}`}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <p className="text-white text-center">{item.name}</p>
            <h2 className="font-bold text-lg text-center mb-2">{item.label}</h2>
            <div className="flex justify-around">
              <a
                href={item.mode === "private" ? undefined : item.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1 rounded text-white ${
                  item.mode === "private"
                    ? "bg-blue-900/50 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={(e) => item.mode === "private" && e.preventDefault()}
              >
                 View Demo
              </a>
              <a
                href={item.mode === "private" ? undefined : item.source}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1 rounded text-white ${
                  item.mode === "private"
                    ? "bg-gray-900 cursor-not-allowed"
                    : "bg-gray-700 hover:bg-gray-800"
                }`}
                onClick={(e) => item.mode === "private" && e.preventDefault()}
              >
                {item.mode === "private" ? "Private repo" : "Source Code"}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-25 flex justify-center" data-aos="flip-right">
        <Link to={moreProjects.url} target="_blank">
          <button className="px-5 py-2 text-white rounded projos cursor-pointer">
            More Projects
          </button>
        </Link>
      </div>
    </>
  );
};

export default Projects;
