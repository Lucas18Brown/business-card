import React from "react"

function Info() {
  return (
    <div className="info" >
      <div className="info--main" >
        <img className="info--profile_pic" src="assets/Lucas_499.jpg" alt="profile pic"/>
        <h1 id="info--name" >Lucas Brown</h1>
        <h3 id="info--title" >Full Stack developer</h3>
        <a className="info--weblink" href='https://lucas18brown.github.io/Portfolio/' target="_blank" rel='noopener noreferrer'>
          https://lucas18brown.github.io/Portfolio/
        </a>
      </div>
      <div className="info--buttons" >
        <a className="info--email" href='https://www.linkedin.com/in/lucas18brown/' target="_blank" rel='noopener noreferrer' >
          <img id="info--email_img" src="assets/email.png" alt="email" />
          Email
        </a>
        <a className="info--linkedin" href='https://www.linkedin.com/in/lucas18brown/' target="_blank" rel='noopener noreferrer' >
          <img id="info--linkedin_img" src="assets/linkedin.png" alt="linkedin" />
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default Info;
