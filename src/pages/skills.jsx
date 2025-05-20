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
    <div>
      <h1>Programming Languages</h1>
      <div> {languages.Js}  </div>
    </div>
  </>  
  )
}

export default Skills
