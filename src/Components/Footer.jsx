import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram , FaDiscord} from "react-icons/fa"
const FooterContents = [
    { icon: <FaGithub/> },
    { icon: <FaLinkedin/> },
    { icon: <FaWhatsapp/> },
    { icon: <FaTwitter/> },
    { icon: <FaInstagram/> },
    { icon: <FaDiscord/> }
]

const Footer = () => {
    return (
        <>
        <div className="icons">
            {FooterContents.map((index, title) => (
                <a key={title} >{index} </a>
            ))}
        </div>
        </>
    )
}

export default Footer;