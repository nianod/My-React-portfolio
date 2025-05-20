 
import React, { useState, useEffect } from "react";
import {
  softDev,
  codespace,
  university
} from './Ui/educ'

const educationT = {
  message: "While I don't have a traditional academic background in this field, my journey has been driven by curiosity, discipline, and a passion for continuous learning. Through self-guided study, online courses, hands-on projects, and real-world problem-solving, I’ve built a strong foundation and practical skills that reflect my commitment to growth and excellence|"
}
const Education = () => {
    const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 10;  

    const type = () => {
      if (currentIndex <= educationT.message.length) {
        setDisplayedText(educationT.message.substring(0, currentIndex));
        currentIndex++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
   }, [])
  return (
    
    <div className="pb-20">
      <div className=" py-4 flex flex-col items-center mt-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">My Education</h2>
          <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" max-w-md" >
         <p className="text-center text-white"> {displayedText} </p>
      </div>
      </div>
      <div data-aos="fade-left" className="flex items-center justify-center flex-col bg-black text-white w-fit m-auto mt-6 p-5 rounded-lg ">
        <h1 className="bg-blue-800 p-2 rounded-lg text-xl font-semibold"> {university.school} </h1>
        <h3 className="font-bold"> {university.rank} | <i className="font-light">{university.date}</i> </h3>
        <i> {university.contribution} </i>
      </div>
      <div data-aos="flip-up" className="flex items-center justify-center flex-col bg-black text-white w-fit m-auto mt-6 p-5 rounded-lg ">
        <h1 className="bg-blue-800 p-2 rounded-lg text-xl font-semibold"> {softDev.school} </h1>
        <h3 className="font-bold"> {softDev.rank} | <i className="font-light">{softDev.date}</i></h3>
        <i> {softDev.contribution} </i>
      </div>
      <div data-aos="flip-down" className="flex items-center justify-center flex-col bg-black text-white w-fit m-auto mt-6 p-5 rounded-lg ">
        <h1 className="bg-blue-800 p-2 rounded-lg text-xl font-semibold"> {codespace.school} </h1>
        <h3 className="font-bold"> {codespace.rank} | <i className="font-light">{codespace.date}</i> </h3>
        <i> {codespace.contribution} </i>
      </div>
      </div>
    
  )
}

export default Education
