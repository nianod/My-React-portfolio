import React from 'react'
import './header.css'

// const navContent = [
//     {label: "Home", to: "/", icon: Home}
// ]
const Header = () => {
  return (
    <div className='div'>
       <div className='profile-pic'>
            <img src="/arnold.png" alt="myself" />
            <Push />
            <Push/>
       </div>
    </div>
  )
}

function Push() {
  return (
    <div>
    <h2>Welcome to my pop</h2>
    </div>
  )  
}

export default Header
