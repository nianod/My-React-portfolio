 import React from 'react'
 import Profile from './Components/Header' 
 import Counter from './Components/map'
 const App = () => {
   return (
     <div>
       <Profile/>
      <Counter isLoogedIn= {false} name = "Arnold" />
     </div>
   )
 }
 
 export default App
 