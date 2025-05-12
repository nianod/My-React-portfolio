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
            
       </div>
    </div>
  )
}

function Push() {
  const clicks = (event) => {
    alert("clicked")
    event.preventdefault()
  }
  return (
    <div>
    <h2>Welcome to my pop</h2>
    <button onClick={clicks }>try me</button>
    </div>
  )  
}

export default Header
