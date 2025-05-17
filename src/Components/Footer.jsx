import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram , FaDiscord} from "react-icons/fa"
const FooterContents = [
    { icon: <FaGithub/>, URL: "https://github.com/nianod" },
    { icon: <FaLinkedin/>, URL: "https://linkedin.com/in/arnold-wanza-b51654330" },
    { icon: <FaWhatsapp/>, URL: "https://wa.link/ft2zsu"},
    { icon: <FaTwitter/>, URL: "https://x.com/Itsarnold001" },
    { icon: <FaInstagram/>, URL: "https://www.instagram.com/ar_nold._" }
]
const roots = {
    name: "Arnold",
    year: 2025,
    rights: "All rights reserved"
}

const Footer = () => {
    return (
        <>
      <div className="flex justify-center mt-5">
        <div className="w-1/2 bg-blue-600 h-px"></div>
      </div>
      <div className="flex bg-green-400 mt-3 flex-col items-center p-5">
        <div className="flex gap-3 text-xl hover:transition-colors text-2xl">
            {FooterContents.map((item, index) => (
                <a className="links" key={index} href={item.URL} target="_blank" rel="noopener noreferrer">{item.icon} </a>
            ))}
        </div>
        <div className="terms">
            <h4>&copy; {roots.year} {roots.name} </h4>
            <h5>{roots.rights}</h5>
 
        </div>
      </div>    
        </>
    )
}

export default Footer;