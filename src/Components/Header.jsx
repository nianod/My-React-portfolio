import React from 'react'
import './header.css'


// const navContent = [
//     {label: "Home", to: "/", icon: Home}
// ]

const user = {
  name: "Arnold",
  imageURL: '3c4813fa70d7f0597c00220179dceb9f.png',
  imageSize: 50,
}

function Profile () {
  return(
    <>
    <h1>{user.name}</h1>
      <img 
        className='ownerimage'
        src={user.imageURL}
        alt = {"photo of "+ user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      
      />
    </>
  )
}

 export default Profile


 const navContents = [
  {label: "Home"},
  {label: "Skills"},
  {label: "Education"},
  {label: "Blogs"},
  {label: "Projects"},
  {label: "Contact"}
]

function NavC () {
  return(
    <div>
      <nav>
        {navContents.map((item, index) =>(
          <a key={index} href={`#${item.label.toLocaleLowerCase()}`} >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export { NavC }




// function Push() {
//   const clicks = (event) => {
//     alert("clicked")
//     event.preventdefault()
//     console.log("correct");
    
//   }
//   return (
//     <div>
//     <h2>Welcome to my pop</h2>
//     <button onClick={clicks }>try me</button>
//     </div>
//   )  
// }


