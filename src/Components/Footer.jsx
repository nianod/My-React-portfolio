import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram , FaDiscord} from "react-icons/fa"
const FooterContents = [
    { icon: <FaGithub/>, URL: "https://github.com/nianod" },
    { icon: <FaLinkedin/> },
    { icon: <FaWhatsapp/> },
    { icon: <FaTwitter/> },
    { icon: <FaInstagram/> },
    { icon: <FaDiscord/> }
]

const Footer = () => {
    return (
        <>
        <div className="footerUIcons">
            {FooterContents.map((item, index) => (
                <a key={index} href={item.URL} target="_blank">{item.icon} </a>
            ))}
        </div>
        </>
    )
}

export default Footer;