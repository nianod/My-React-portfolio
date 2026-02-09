import React, { useState, useEffect, useCallback } from "react";
import { softDev, codespace, university } from './Ui/educ';
import { FaGraduationCap, FaLaptop, FaAd, FaInfinity } from "react-icons/fa";

 const EDUCATION_TEXT = {
  message: "While I don't have a traditional academic background in this field, my journey has been driven by curiosity, discipline, and a passion for continuous learning. Through self-guided study, online courses, hands-on projects, and real-world problem-solving, I've built a strong foundation and practical skills that reflect my commitment to growth and excellence."
};

 const EDUCATION_DATA = [
  {
    ...university,
    animation: "fade-left",
    color: "from-blue-600 to-blue-800",
    icon: <FaGraduationCap />
  },
  {
    ...softDev,
    animation: "flip-up",
    color: "from-green-600 to-green-800",
    icon:  <FaLaptop />
  },
  {
    ...codespace,
    animation: "flip-down",
    color: "from-blue-600 to-blue-800",
    icon: <FaAd />
  }
];

const Education = () => {
 
   const EducationCard = ({ education, index }) => (
    <div 
      data-aos={education.animation}
      data-aos-delay={index * 200}
      className="group relative w-full max-w-2xl mb-6 transition-all duration-500"
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
         <div className={`absolute inset-0 bg-gradient-to-r ${education.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
        
         <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${education.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
          <div className="absolute inset-[2px] rounded-2xl bg-gray-900" />
        </div>

        <div className="relative z-10">
           <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-white">{education.icon}</span>
              <h1 className={`text-xl font-bold bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}>
                {education.school}
              </h1>
            </div>
            <div className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              {education.date}
            </div>
          </div>

           <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-1">
              {education.rank}
            </h3>
             
          </div>

           <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-gray-300 leading-relaxed italic">
              {education.contribution}
            </p>
          </div>
 
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-10 pb-20 min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <div data-aos="fade-up" className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              My Education Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto" />
          </div>

           <div data-aos="fade-up" data-aos-delay="200" className="max-w-4xl mx-auto">
               <p className="text-gray-300 text-xl space-y-2">
                 {EDUCATION_TEXT.message}
               </p>
          </div>
        </div>

         <div className="relative max-w-4xl mx-auto">
           
          
           <div className="space-y-8">
            {EDUCATION_DATA.map((education, index) => (
              <div 
                key={education.school}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className="w-full max-w-2xl">
                  <EducationCard education={education} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>

         <div data-aos="fade-up" className="text-center mt-16">
          <div className="inline-flex gap-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{EDUCATION_DATA.length}</div>
              <div className="text-sm text-gray-400">Educational Milestones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-400">Self-Taught Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400"><FaInfinity /></div>
              <div className="text-sm text-gray-400">Continuous Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;