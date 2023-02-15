import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

function Info() {
  return (
    <div className="info" >
      <div className="info--main" >
        <img className="info--profile_pic" src={require("../assets/Lucas_good.jpg")} alt="profile pic"/>
        <h1 id="info--name" >Lucas Brown</h1>
        <h3 id="info--title" >Full Stack developer</h3>
        <a className="info--weblink" href='https://lucas18brown.github.io/Portfolio/' target="_blank" rel='noopener noreferrer'>
          https://lucas18brown.github.io/Portfolio/
        </a>
      </div>
      <div className="info--buttons" >
        <a className="info--email" href='https://www.linkedin.com/in/lucas18brown/' target="_blank" rel='noopener noreferrer' >
          <FontAwesomeIcon id="info--email_img" icon={faEnvelope} />
          Email
        </a>
        <a className="info--linkedin" href='https://www.linkedin.com/in/lucas18brown/' target="_blank" rel='noopener noreferrer' >
          <FontAwesomeIcon icon={faLinkedin} id="info--linkedin_img" />
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Info;
