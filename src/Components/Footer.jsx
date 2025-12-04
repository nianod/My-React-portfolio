 import {FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram} from "react-icons/fa";

 
const SOCIAL_LINKS = [
  { 
    icon: <FaGithub />, 
    URL: "https://github.com/nianod",
    name: "GitHub",
    color: "hover:text-gray-400"
  },
  { 
    icon: <FaLinkedin />, 
    URL: "https://linkedin.com/in/arnold-wanza-b51654330",
    name: "LinkedIn",
    color: "hover:text-blue-400"
  },
  { 
    icon: <FaWhatsapp />, 
    URL: "https://wa.link/ft2zsu",
    name: "WhatsApp",
    color: "hover:text-green-400"
  },
  { 
    icon: <FaTwitter />, 
    URL: "https://x.com/Itsarnold001",
    name: "Twitter",
    color: "hover:text-blue-300"
  },
  { 
    icon: <FaInstagram />, 
    URL: "https://www.instagram.com/ar_nold._",
    name: "Instagram",
    color: "hover:text-pink-400"
  }
];

const FOOTER_INFO = {
  name: "Arnold",
  year: 2025,
  rights: "All rights reserved"
};

const Footer = () => {
  return (
    <footer className="relative z-40 mt-auto">
      <div className="bg-gradient-to-t from-gray-900 via-gray-900 to-gray-900 border-t border-gray-700/50">
        <div className="container mx-auto px-4">
           <div className="flex justify-center py-6">
            <div className="bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-6 py-4 shadow-2xl">
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((item, index) => (
                  <a
                    key={index}
                    href={item.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-12 h-12 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white text-xl transition-all duration-300 ${item.color} hover:scale-110 hover:bg-gray-600/70 hover:border-gray-500/70 hover:shadow-lg`}
                    aria-label={`Visit ${item.name}`}
                  >
                    {item.icon}
                    <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

           <div className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <span>Crafted with Passion</span>
                  <span>by {FOOTER_INFO.name}</span>
                </div>
                
                <div className="text-gray-400 text-sm">
                  <span>&copy; {FOOTER_INFO.year} </span>
                  <span className="text-white font-semibold">{FOOTER_INFO.name}</span>
                  <span> - {FOOTER_INFO.rights}</span>
                </div>

                <div className="text-gray-400 text-sm">
                  <span>Hire me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;















