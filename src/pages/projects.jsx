 import projectsc from './Ui/projects'
import React, { useState, useEffect } from 'react'


let handOnProjects = [
  {label: "Online Management", URL: "https://online-renting-six.vercel.app/", photo: "/public/Screenshot 2025-05-21 153717.png"},
   {label: "Global Info",URL: "https://github.com/nianod/See-Global-info", photo: "/public/Screenshot 2025-05-21 152451.png"},
   {label: "Humour Arena" , URL: "https://github.com/nianod/lottery-game", photo: "/public/Screenshot 2025-05-21 153446.png"}
  
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
    <div className='mt-20 flex flex-col items-center'>
      <h1 className='flex justify-center items-center text-4xl font-bold text-blue-400 mb-2 '> My Projects</h1>
       <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
       <p className='text-white text-center'> {displayedText} </p>
    </div>
    <div className='text-white pb-20 flex content-between items-center gap-5 mt-10 border-2'>
        {handOnProjects.map((item, index) => (
          <a
          href={item.URL}
          key={index} 
          target='_blank'
          rel='noopener noreferrer'
          >
           <img src={item.photo} 
           alt={"photo of"+ item.label}
           className='w-70 h-50 object-cover rounded-lg'
            /> 
          <h2 className='font-bold text-center'>{item.label}</h2>
          
          </a>
        ))}
    </div>
   </> 
  )
}

export default Projects
