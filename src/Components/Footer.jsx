import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram , FaDiscord} from "react-icons/fa"
const FooterContents = [
    { icon: <FaGithub/>, URL: "https://github.com/nianod" },
    { icon: <FaLinkedin/>, URL: "https://linkedin.com/in/arnold-wanza-b51654330" },
    { icon: <FaWhatsapp/>, URL: "https://wa.link/ft2zsu"},
    { icon: <FaTwitter/>, url: "https://x.com/Itsarnold001" },
    { icon: <FaInstagram/>, URL: "https://www.instagram.com/ar_nold._" },
    { icon: <FaDiscord/> }
]
const roots = {
    name: "Arnold",
    year: 2025,
    rights: "All rights reserved"
}

const Footer = () => {
    return (
        <>
      <div style={{marginTop: "5rem",}}>
        <hr className="hr"/>
        <div className="footerUIcons">
            {FooterContents.map((item, index) => (
                <a key={index} href={item.URL} target="_blank" rel="noopener noreferrer">{item.icon} </a>
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