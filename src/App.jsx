
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css'
import Home from './pages/home'
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
