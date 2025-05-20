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
    <div className='langs flex flex-col items-center justify-center'>
      <h1 className='text-blue-400 underline font-bold text-xl'>Programming Languages</h1>
      <div className='flex gap-5'>
        <div className='single-language'>
        <img className='iconImg' src={icons.jS} 
         alt={languages.Js} />
        <h3>{languages.Js} </h3> 
      </div>
      <div className='single-language'>
        <img className='iconImg' src={icons.py} 
         alt={languages.Py} />
        <h3>{languages.Py} </h3> 
      </div>
      <div className='single-language'>
        <img className='iconImg' src={icons.ts} 
         alt={languages.Ts} />
        <h3>{languages.Ts} </h3> 
      </div>
      <div className='single-language'>
        <div className='flex'>
        <img className='iconImg' src={icons.html}
         alt={languages.HtM} />
        <img className='iconImg' src={icons.css}
         alt={languages.HtM} />
         </div>
        <h3>{languages.HtM} </h3> 
      </div>
    </div>
    </div>
    <div className='frameworks flex flex-col items-center justify-center mb-20'>
      <h1 className='text-blue-400 underline font-bold text-xl'>Frameworks & Liblaries</h1>
      <div className='flex gap-5'>
        <div className='frame'>
        <img className='iconImg' src={icons.react} 
         alt={frameworks.JSX} />
        <h3>{frameworks.JSX} </h3> 
      </div>
      <div className='frame'>
        <img className='iconImg' src={icons.node} 
         alt={frameworks.Node} />
        <h3>{frameworks.Node} </h3> 
      </div>
      <div className='frame'>
        <img className='iconImg' src={icons.axios} 
         alt={frameworks.Axios} />
        <h3>{frameworks.Axios} </h3> 
      </div>
      <div className='frame'>
        <div className='flex'>
        <img className='iconImg' src={icons.tailwind}
         alt={frameworks.Tail} />
         </div>
        <h3>{frameworks.Tail} </h3> 
      </div>
    </div>
    </div>
    <div className='dabs flex flex-col items-center justify-center mb-20'>
      <h1 className='text-blue-400 underline font-bold text-xl'>Database Technologies</h1>
      <div className='flex gap-5'>
        <div className='database'>
        <img className='iconImg' src={icons.supabase} 
         alt={dbs.supabase} />
        <h3>{dbs.supabase} </h3> 
      </div>
      <div className='database'>
        <img className='iconImg' src={icons.mongo} 
         alt={dbs.Mongo} />
        <h3>{dbs.Mongo} </h3> 
      </div>
    </div>
    </div>

  </>  
  )
}

export default Skills
