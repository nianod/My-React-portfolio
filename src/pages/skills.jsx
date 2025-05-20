import icons from './skill.icons'
import React from 'react'
import { skillTitle, dbs, frameworks, languages } from "./skilldummy"
import { FaJs, FaReact, FaPython, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'


const Skills = () => {
  return (
  <>  
    <div className='pb-20 mt-15 flex justify-center items-center flex-col'>
      <h1 className='text-blue-400 font-bold flex justify-center items-center text-xl underline'> Self-Taught-Skills</h1>
      <p className='EXP text-white'> {skillTitle.titl} </p>
    </div>
    <div className='flex flex-col items-center'>
      <h1 className='text-blue-400 underline font-bold text-xl'>Programming Languages</h1>
      <div className='flex flex-col ityems-center'>
        <img className='iconImg' src={icons.jS} 
         alt={languages.Js} />
        <h3>{languages.Js} </h3> 
      </div>
      <div>
        <img className='iconImg' src={icons.py} 
         alt={languages.Py} />
        <h3>{languages.Py} </h3> 
      </div>
      <div>
        <img className='iconImg' src={icons.ts} 
         alt={languages.Ts} />
        <h3>{languages.Ts} </h3> 
      </div>
      <div>
        <img className='iconImg' src={icons.html}
         alt={languages.HtM} />
        <img className='iconImg' src={icons.css}
         alt={languages.HtM} />
        <h3>{languages.HtM} </h3> 
      </div>
    </div>
  </>  
  )
}

export default Skills
