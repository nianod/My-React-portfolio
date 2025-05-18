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
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Header' element={<Header/>} />
        <Route path='/Footer' element={<Footer/>} />
      </Routes>
    </Layout>
  )
}

export default App
