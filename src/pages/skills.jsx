
import { useEffect, useState } from 'react'
import icons from './Ui/skill.icons'
import { skillTitle, dbs, frameworks, languages } from "./Ui/skilldummy"



const Skills = () => { 
  
      const [displayedText, setDisplayedText] = useState("")

    useEffect(() => {
      let currentIndex = 0
      const typingSpeed = 10;

      const typing = () => {
        if(currentIndex <= skillTitle.titl.length) {
          setDisplayedText(skillTitle.titl.substring(0, currentIndex));
          currentIndex++;
          setTimeout(typing, typingSpeed)
        }
      }
      typing()
    }, [])
  
  
  return (
  <>  
  <div data-aos="fade-left">
     <div className='pb-20 mt-15 flex justify-center items-center flex-col'>
      <h1 className='flex justify-center items-center text-4xl font-bold text-blue-400 mb-2 '> Self-Taught-Skills</h1>
       <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
      <p className='EXP text-white mt-5'> {displayedText} </p>
    </div>
    <div data-aos = "flip-down" className='langs flex flex-col items-center justify-center'>
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
    <div data-aos = "flip-down" className='frameworks flex flex-col items-center justify-center'>
      <h1 className='text-blue-400 underline font-bold text-xl'>Frameworks & Libraries</h1>
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
        <img className='iconImg' src={icons.express} 
         alt={frameworks.Express} />
        <h3>{frameworks.Express} </h3> 
      </div>
      <div className='frame'>
        <div className='flex'>
        <img className='iconImg' src={icons.next}
         alt={frameworks.Next} />
         </div>
        <h3>{frameworks.Next} </h3> 
      </div>
    </div>
    </div>
    <div data-aos = "flip-down" className='dabs flex flex-col items-center justify-center mb-20'>
      <h1 className='text-blue-400 underline font-bold text-xl'>Database Technologies</h1>
      <div className='flex gap-5'>
        <div className='database'>
        <img className='iconImg' src={icons.supabase} 
         alt={dbs.Supa} />
        <h3>{dbs.Supa} </h3> 
      </div>
      <div className='database'>
        <img className='iconImg' src={icons.mongo} 
         alt={dbs.Mongo} />
        <h3>{dbs.Mongo} </h3> 
      </div>
    </div>
    </div>
  </div>

    <div className='pb-30'>
      <p>Competitive Skills</p>
      
    </div>

  </>  
  )
}

export default Skills
