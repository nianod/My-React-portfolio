 
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
    <>
      <div className=" py-4 flex flex-col items-center mt-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">My Education</h2>
          <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" max-w-md" >
         <p className="text-center text-white"> {displayedText} </p>
      </div>
      </div>
      <div>
        <h1> {university.school} </h1>
        <h3 > {university.rank}</h3>
      </div>
    </>
  )
}

export default Education
