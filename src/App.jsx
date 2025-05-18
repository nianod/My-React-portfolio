import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Blogs from './pages/Blogs'
import Projects from './pages/projects'
import Contact from './pages/Contact'
import Layout from './Components/layout'

const App = () => {
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