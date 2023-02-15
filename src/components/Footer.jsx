import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer >
      <a className="footer--github" href='https://github.com/Lucas18Brown' target="_blank" rel='noopener noreferrer' >
        <FontAwesomeIcon icon={faGithub} id="footer--github_img" />
      </a>
    </footer>
  )
}

export default Footer;
