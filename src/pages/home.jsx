import React from 'react'
import { use } from 'react'



const users = {
    name: "Arnold's TECH",
    job: "Transforming Ideas into code",
    imageUrl: "/arnold.jpg"
}

const movingText = [
    "Hello my name is Arnold...",
    "A fronted Developer...",
    "Am a coding and programming Hobyyst...",
    "I like sharing my knowledge, can we collaborate?"
]

const Home = () => {
  return (
    <div className='m-20'>
      <img className='myimage w-30 h-30 object-cover rounded-full'
        src= {users.imageUrl} 
        alt= {"Photo of "+ users.name} 
      />
        <h1 className='text-blue-500 font-bold'> {users.name} </h1>
        <p className='font-bold text-2xl m-2'>
           { users.job}
        </p>
    </div>
  )
}

export default Home
