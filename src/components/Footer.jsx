import { FaGithub } from "react-icons/fa";
import '../index.css'
function Footer(){
    return(
        <footer>
          LS-WEB Development {" "}
          <a href="https://github.com/lswebdevelops" target="_blank" rel="noopener noreferrer">
          <FaGithub className="git-icon"/>
          </a>
        </footer>
    )
}
export default Footer;