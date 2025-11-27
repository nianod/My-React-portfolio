import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer'
import reach from './Ui/conts'

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [namePlaceholder, setNamePlaceholder] = useState("Full Name");
  const [phoneNoPlaceholder, setPhoneNoPlaceholder] = useState("+25412345678");
  const [messagePlaceholder, setMessagePlaceholder] = useState("Your message...");
  const [timestamp, setTimestamp] = useState(null)
  const [loading, setLoading] = useState(false)

 
  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)

    const formData = {
      namePlaceholder,
      phoneNoPlaceholder,
      messagePlaceholder
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/contact_me", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })
      if(response.ok ){
        
        setSent(true)
        setTimestamp(new Date())
      } else {
        alert('Failed')
        setSent(false)
        setLoading(false)
      }
    } catch(err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 10;

    const type = () => {
      if (currentIndex <= reach.contactMessage.length) {
        setDisplayedText(reach.contactMessage.substring(0, currentIndex));
        currentIndex++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  }, []);

   
  if (sent) {
    return (
      <div data-aos="zoom-in">
        <div className=" py-4 flex flex-col items-center mt-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Contact Me</h2>
          <div className="w-3/4 h-1 rounded bg-gradient-to-r from-yellow-700 via-yellow-500 to-transparent"></div>
          <p className="text-white max-w-xl text-center mt-5">
            {displayedText}
            
          </p>
        </div>

        <div className="pb-30">
          <form
            className="bg-black gap-2 mt-5 max-w-[30rem] mx-auto p-6 flex flex-col text-white rounded-xl bodaree"
          >
            <div data-aos="zoom-in" className="text-center mt-5 text-white">
              <h2 className="text-3xl font-bold text-green-400">
                 Thank You!
              </h2>
              <p className="mt-4 text-lg">
                Your message has been sent successfully. We'll get back to you
                soonest Possible.
              </p>
              <p className='bg-blue-600 rounded p-2 font-semibold mt-4'>
                {timestamp && (
                  <span>
                     Deliverly time: {new Date(timestamp).toLocaleString()}
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div data-aos="zoom-in" className='pb-20 mt-10 min-h-screen bg-gradient-to-br from-gray-900 to-black'>
      <div className=" py-9 flex flex-col items-center mt-10">
        <h2 className="text-4xl font-bold text-blue-400 mb-2">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto" />

        <p className="text-white max-w-xl text-center mt-5">{displayedText}</p>
      </div>

      <div className="pb-25">
        <form
          onSubmit={handleSubmit}
          className="bg-black gap-2 mt-5 max-w-[30rem] mx-auto p-6 flex flex-col text-white rounded-xl bodaree"
        >
          <h2 className="text-center text-2xl font-bold">Messenger Channel</h2>

          <label>Name* </label>
          <input
            className="p-3 rounded bg-blue-800 text-white focus:outline-transparent"
            type="text"
            placeholder={namePlaceholder}
            onChange={(e) => setNamePlaceholder(e.target.value)}
            required
          />

          <label>Phone Number* </label>
          <input
            className="p-3 rounded bg-blue-800 text-white focus:outline-transparent"
            type="number"
            placeholder={phoneNoPlaceholder}
            onChange={(e) => setPhoneNoPlaceholder(e.target.value)}
            required
          />

          <label>Message* </label>
          <textarea
            className="rounded p-3 bg-blue-800 text-white h-32 resize-none focus:outline-transparent"
            placeholder={messagePlaceholder}
            onChange={(e) => setMessagePlaceholder(e.target.value)}
            required
          ></textarea>

          <button
            className={`p-2 w-50 text-white rounded-xl bg-blue-500 cursor-pointer m-auto mt-5 ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-blue-400"}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"} 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact
