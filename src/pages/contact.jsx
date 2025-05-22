import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import reach from './Ui/conts'

const Contact = () => {
  const [sent, setSent] = useState(false)
  const [namePlaceholder, setNamePlaceholder] = useState("Full Name")
  const [phoneNoPlaceholder, setPhoneNoPlaceholder] = useState("+25412345678")
  const [emailPlaceholder, setEmailPlaceholder] = useState("yourname@gmail.com")
  const [messagePlaceholder, setMessagePlaceholder] = useState("Your message...")

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    
    setNamePlaceholder("Full Name")
    setPhoneNoPlaceholder("+25412345678")
    setEmailPlaceholder("yourname@gmail.com")
    setMessagePlaceholder("Your message...")
}
 
    //Moving text
   const [displayedText, setDisplayedText] = useState("")
   useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 10;

    const type = () => {
      if(currentIndex <= reach.contactMessage.length) {
        setDisplayedText(reach.contactMessage.substring(0, currentIndex))
        currentIndex++;
        setTimeout(type, typingSpeed);
      }
    };
    type()
   }, [])



  return (
    <div data-aos="zoom-in" >
      <div className=" py-4 flex flex-col items-center mt-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Contact Me</h2>
          <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
          <p className='text-white max-w-xl text-center mt-5'> {displayedText} </p>
      </div>
      <div  className='pb-25'>
      <form  onSubmit={handleSubmit} className='bg-black gap-2 mt-5 max-w-xl mx-auto p-6 flex flex-col text-white rounded-xl bodaree'>
        <label>Name </label>
          <input
          className='p-3 rounded bg-blue-800 text-white focus:outline-transparent'
           type="text"
           placeholder={namePlaceholder} 
           required
          />
          <label>Phone Number </label>
          <input
           className='p-3 rounded bg-blue-800 text-white focus:outline-transparent'
           type="number"
           placeholder={phoneNoPlaceholder} 
           required
          />
          <label>Email </label>
          <input
           className='p-3 rounded bg-blue-800 text-white focus:outline-transparent'
           type="email"
           placeholder={emailPlaceholder} 
           required
          />
          <label>Message </label>
          <textarea
            className='rounded p-3 bg-blue-800 text-white h-32 resize-none focus:outline-transparent '
            placeholder={messagePlaceholder}
            required
          ></textarea>
          <button
            
            className='p-2 w-50 text-white rounded-xl bg-blue-500 cursor-pointer m-auto mt-5'
            type='submit'
          >
            {sent ? "Message sent!" : "Send Message" }
          </button>
      </form>
    </div>
  </div>  
  )
}

export default Contact
