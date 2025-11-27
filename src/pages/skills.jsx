import { useEffect, useState, useCallback } from 'react'
import icons from './Ui/skill.icons'
import { skillTitle, dbs, frameworks, languages } from "./Ui/skilldummy"
import moreSkills from './Ui/MoreSkills'

 const TYPING_SPEED = 80;
const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    data: languages,
    items: [
      { icon: icons.jS, name: languages.Js },
      { icon: icons.py, name: languages.Py },
      { icon: icons.ts, name: languages.Ts },
      { icon: [icons.html, icons.css], name: languages.HtM }
    ]
  },
  {
    title: "Frameworks & Libraries",
    data: frameworks,
    items: [
      { icon: icons.react, name: frameworks.JSX },
      { icon: icons.node, name: frameworks.Node },
      { icon: icons.fastapi, name: frameworks.FastAPI },
      { icon: icons.next, name: frameworks.Next }
    ]
  },
  {
    title: "Database Technologies",
    data: dbs,
    items: [
      { icon: icons.supabase, name: dbs.Supa },
      { icon: icons.mongo, name: dbs.Mongo }
    ]
  }
];

const Skills = () => {
  const [displayedText, setDisplayedText] = useState("");

   const startTypingEffect = useCallback(() => {
    let currentIndex = 0;
    const text = skillTitle.titl;

    const type = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
        setTimeout(type, TYPING_SPEED);
      }
    };
    
    type();
  }, []);

  useEffect(() => {
    startTypingEffect();
  }, [startTypingEffect]);

   const SkillItem = ({ icon, name = false }) => (
    <div className="group relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/5 backdrop-blur-sm">
      <div className="relative">
        {Array.isArray(icon) ? (
          <div className="flex gap-2">
            {icon.map((imgSrc, index) => (
              <img
                key={index}
                className="iconImg w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                src={imgSrc}
                alt={name}
              />
            ))}
          </div>
        ) : (
          <img
            className="iconImg w-12 h-12 transition-transform duration-300 group-hover:scale-110"
            src={icon}
            alt={name}
          />
        )}
        <div className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="mt-3 text-white font-semibold text-sm text-center group-hover:text-blue-300 transition-colors duration-300">
        {name}
      </h3>
    </div>
  );

   const SkillCategory = ({ title, items }) => (
    <div 
     
      className="skill-category mb-12"
    >
      <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center relative">
        {title}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-2" />
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, index) => (
          <SkillItem
            key={`${title}-${index}`}
            icon={item.icon}
            name={item.name}
            isDouble={Array.isArray(item.icon)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-10 pb-20 min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">
       <div data-aos="fade-left" className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Self-Taught Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {displayedText}
            <span className="ml-1 animate-pulse">|</span>
          </p>
        </div>
      </div>

       <div className="container mx-auto px-4 mb-20">
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            items={category.items}
            animation="flip-down"
          />
        ))}
      </div>

       <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Competitive Skills & Tools
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {moreSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/50 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex-shrink-0">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <p className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-blue-300 flex-1 text-center">
                  {skill.name}
                </p>
                
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-20">
        <div className="flex justify-center gap-8 text-center">
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-300">{SKILL_CATEGORIES.length}+</div>
            <div className="text-sm text-blue-200">Skill Categories</div>
          </div>
          <div className="bg-green-900/30 border border-green-500/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-300">{moreSkills.length}+</div>
            <div className="text-sm text-green-200">Tools & Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;