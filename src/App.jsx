import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import Home from './pages/home'
import Skills from './pages/skills'
import Education from './pages/education'
import Blogs from './pages/blogs'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Layout from './Components/layout'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);
  return(
    <Router>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element = {<Home />} /> 
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App