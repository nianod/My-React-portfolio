 import React, { useState, useCallback } from "react";
import projectsc from "./Ui/projects";
import handOnProjects from "./Ui/HandOnProjects";
import Description from "./Description";

const MORE_PROJECTS_URL = "https://github.com/nianod?tab=repositories";

const Projects = () => {
  const [description, setDescription] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDescriptionClick = useCallback((project) => {
    setSelectedProject(project);
    setDescription(true);
  }, []);

  const ProjectCard = ({ project }) => (
    <div
      data-aos="fade-up"
       
      className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 backdrop-blur-sm overflow-hidden transition-all duration-500"
    >
 
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0  " />
      
       <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-500 opacity-0 ">
        <div className="absolute inset-[2px] rounded-2xl bg-gray-900" />
      </div>

      <div className="relative z-10">
   
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img
            src={project.photo}
            alt={`Screenshot of ${project.label}`}
            className="w-full h-48 object-cover transition-transform duration-500 "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
           
        </div>

      
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
            {project.label}
          </h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
            {project.name}
          </p>
          
      
          {project.tech && (
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

         <div className="flex gap-2">
          <a
            href={project.mode === "private" ? undefined : project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center py-2 px-3 rounded-lg font-semibold transition-all duration-300 ${
              project.mode === "private"
                ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25"
            }`}
            onClick={(e) => project.mode === "private" && e.preventDefault()}
          >
            Live Demo
          </a>
          
          <button
            className="cursor-pointer flex-1 py-2 px-3 bg-gradient-to-r from-green-600 to-green-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-500/25"
            onClick={() => handleDescriptionClick(project)}
          >
            Details
          </button>
          
          <a
            href={project.mode === "private" ? undefined : project.source}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center py-2 px-3 rounded-lg font-semibold transition-all duration-300 ${
              project.mode === "private"
                ? "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                : "bg-gray-700 hover:bg-gray-600 text-white shadow-lg hover:shadow-gray-500/25"
            }`}
            onClick={(e) => project.mode === "private" && e.preventDefault()}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
 

  return (
    <div className="pb-20 mt-10 min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto" />
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm border rounded-2xl p-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed min-h-[120px] flex items-center justify-center">
                {projectsc.head}  
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {handOnProjects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>

        <div data-aos="flip-up" className="text-center">
          <a
            href={MORE_PROJECTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300    "
          >
            <span>Explore All Projects</span>
          </a>
        </div>

        <div data-aos="fade-up" className="text-center mt-16">
          <div className="inline-flex gap-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{handOnProjects.length}+</div>
              <div className="text-sm text-gray-400">Featured Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {handOnProjects.filter(p => p.mode !== "private").length}+
              </div>
              <div className="text-sm text-gray-400">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-400">Hands-On</div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="relative z-50">
        {description && (
          <Description 
            description={description} 
            setDescription={setDescription}
            project={selectedProject}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;



  