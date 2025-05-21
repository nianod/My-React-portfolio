 import projectsc from './Ui/projects'
import React, { useState, useEffect } from 'react'


let handOnProjects = {
  
}
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
    <div className='mt-20 flex flex-col items-center'>
      <h1 className='flex justify-center items-center text-4xl font-bold text-blue-400 mb-2 '> My Projects</h1>
       <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
       <p className='text-white text-center'> {displayedText} </p>
    </div>
  )
}

export default Projects
