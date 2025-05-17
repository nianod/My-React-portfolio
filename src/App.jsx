
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './index.css'
import Home from '../pages/home'

const App = () => {
  return (
    <div className='mains'>
      <Header/>
      <Footer/>
      <Home/>
    </div>
  )
}

export default App
