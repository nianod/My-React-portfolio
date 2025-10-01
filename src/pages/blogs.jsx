import React, { useEffect, useState } from 'react'
import blog from './Ui/blogcard'

const blogPost = {
  image: "/Screenshot 2025-05-22 010859.png",  
  title: "WebSockets and REST APIs Explained",
  link: "https://stackbyarnold-websockets.blogspot.com/2025/10/websockets-vs-rest-apis-explained.html"
}

const Blogs = () => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 10

    const type = () => {
      if (currentIndex <= blog.post.length) {
        setDisplayedText(blog.post.substring(0, currentIndex))
        currentIndex++
        setTimeout(type, typingSpeed)
      }
    }

    type()
  }, [])
const view = () => {
    alert("Redirecting to blog site...")
    setTimeout(() => {
      alert("Failed to Catch blog")
    }, 2000);
}
  return (
 <div data-aos="zoom-in-left" className="py-4 flex flex-col items-center mt-10 pb-25">
  <h2 className="text-4xl font-bold text-blue-400 mb-2">My Blogs</h2>
  <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
  <p className="text-white max-w-xl text-center mt-5">{displayedText}</p>

  <div className="mt-10 p-6 bg-black border border-yellow-600 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto max-w-2xl">
    <img
      src={blogPost.image}
      alt="Blog Cover"
      className="w-full rounded mb-4"
    />
    <h3 className="text-2xl font-bold text-white text-center">{blogPost.title}</h3>
    <button
      
      className="text-white bg-blue-800 p-2 rounded-2xl cursor-pointer block mx-auto"
    >
      <a href={blogPost.link} 
        target='_blank'
      > Explore Blog</a>
     
    </button>
  </div>
</div>
  )
}

export default Blogs
