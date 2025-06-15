 import projectsc from './Ui/projects'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const moreProjects = {
  url: "https://github.com/nianod?tab=repositories"
}
let handOnProjects = [
  {
    label: "Online Management", 
    source: "https://github.com/nianod/Stack-Rent/", 
    live: "https://online-renting-six.vercel.app",
    photo: "Screenshot 2025-05-21 153717.png",
    name: "Online Rental Management"
  },
   {
    label: "Global Info",
    source: "https://github.com/nianod/See-Global-info", 
    live: "public/Weather API/weather Works/index.html",
    photo: "Screenshot 2025-05-21 152451.png",
    name: "REST Cntrs"
  },
  {
    label: "Humour Arena", 
    source: "https://github.com/nianod/Joke-Overflow", 
    live: "public/Joke Api/index.html",
    photo: "Screenshot 2025-05-21 153446.png",
    name: "Programmers Humor Arena"
  },
  {
    label: "Github profile Finder", 
    source: "https://github.com/nianod/Github-Profile-Finder", 
    live: "https://github-profile-finder-smoky.vercel.app/",
    photo: "Screenshot 2025-06-13 101018.png",
    name: "Github profile Finder"
  },
  {
    label: "Airbnb looks", 
    source: "https://github.com/nianod/Airbnb-clone", 
    live: "https://airbnb-look-alike.vercel.app//",
    photo: "Screenshot 2025-06-15 132700.png",
    name: "Airbnb look alike"
  }
  
]
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
     }, [])
  return (
    <>
    <div className='mt-15 flex flex-col items-center'>
      <h1 className='flex justify-center items-center text-4xl font-bold text-blue-400 mb-2 '> My Projects</h1>
       <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
       <p className='text-white text-center'> {displayedText} </p>
    </div>
<div data-aos="fade-up-left" className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 px-6 py-10 ">
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
      <p className='text-white text-center' > {item.name} </p>
      <h2 className="font-bold text-lg text-center mb-2">{item.label}</h2>

      <div className="flex justify-around">
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-700"
        >
          View demo
        </a>
        <a
          href={item.source}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 px-3 py-1 rounded text-white hover:bg-gray-800"
        >
          Source Code
        </a>
      </div>
    </div>
  ))}
</div>
<div className="pb-25 flex justify-center" data-aos= "flip-right"> 
    <Link to={moreProjects.url} target='_blank'>
      <button className="px-5 py-2 text-white rounded projos cursor-pointer">
        More Projects
      </button>
    </Link>
  </div>
   </> 
  )
}

export default Projects
