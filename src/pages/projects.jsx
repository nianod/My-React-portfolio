import projectsc from "./Ui/projects";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import handOnProjects from "./Ui/HandOnProjects";
import Description from "./Description";

const moreProjects = {
  url: "https://github.com/nianod?tab=repositories",
};

const Projects = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [description, setDescription] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleDescriptionClick = (project) => {
    setSelectedProject(project);
    setDescription(true);
  };

  return (
    <>
      <div className="mt-15 flex flex-col items-center">
        <h1 className="flex justify-center items-center text-4xl font-bold text-blue-400 mb-2">
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
              <button 
                className="px-3 py-1 rounded bg-yellow-600 text-white hover:bg-yellow-700 cursor-pointer"
                onClick={() => handleDescriptionClick(item)}
              >
                Description
              </button>
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
      
      {description && (
        <Description 
          description={description} 
          setDescription={setDescription}
          project={selectedProject}
        />
      )}
      
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