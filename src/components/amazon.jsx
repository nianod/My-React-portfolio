import React from 'react'
import "./amazon.css"

const Amazon = () => {
    const handler = () => {
        
    }
  return (
    <>
    <div className='Nav'>
        <div className='Navbar'>
            <h1>Welcome to Arnold's Tech</h1>
            <ul className='navlist'>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
            </ul>     
        </div>
    </div>
    <div>
        <button onClick={handler}>click me</button>
    </div>
    </>
    
  )
}

export default Amazon
