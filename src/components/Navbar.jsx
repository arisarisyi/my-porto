import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaRegSun,
} from "react-icons/fa"
import logos from "../assets/logo.png"
import { useLight } from "../context/LightContext"

const Navbar = () => {
  const { light, toggleLight } = useLight()

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logos} width={170} height={69} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/imam-al-arisyi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/arisarisyi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/imamalarisyi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={toggleLight}
      >
        {light ? <FaRegSun /> : <FaMoon />}
      </div>
    </nav>
  )
}

export default Navbar
