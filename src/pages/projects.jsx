 import projectsc from './Ui/projects'
import React, { useState, useEffect } from 'react'


let handOnProjects = [
  {
    label: "Online Management", 
    URL: "https://online-renting-six.vercel.app/", 
    live: "//importing from public",
    photo: "Screenshot 2025-05-21 153717.png"
  },
   {
    label: "Global Info",
    URL: "https://github.com/nianod/See-Global-info", 
    live: "//importing from public",
    photo: "Screenshot 2025-05-21 152451.png"
  },
  {
    label: "Humour Arena", 
    URL: "https://github.com/nianod/Joke-Overflow", 
    live: "//importing from public",
    photo: " Screenshot 2025-05-21 153446.png"
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
<div data-aos="fade-up-left" className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 px-6 py-10 pb-20">
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
      <h2 className="font-bold text-lg text-center mb-2">{item.label}</h2>

      <div className="flex justify-around">
        <a
          href={item.URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-3 py-1 rounded text-white hover:bg-blue-700"
        >
          View demo
        </a>
        <a
          href={item.URL.includes("github") ? item.URL : "#"}
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

   </> 
  )
}

export default Projects
