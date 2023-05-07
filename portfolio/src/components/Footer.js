import React from "react"
import gitHub from "../assets/github-square-white.png"
import linkedIn from "../assets/linkedin-white-only.png" 
import insta from "../assets/Instagram.png"
// need to install the above package

const Footer = () => {
  return (
    <footer className="fixed-bottom">
    <p>Jennifer Engle  |  ©2023  |  
      {/* react component with link to = */}
    {/* <Link to={"t"}><img className="icon" src={gitHub} alt="github icon" /></Link> |   */}
    <a href="https://linkedin.com/in/jennifer-engle" target="_blank"><img className="icon" src={linkedIn} alt="linkedin icon" /></a>  |  
    <a href="https://instagram.com/jengle2984/" target="_blank"><img className="icon" src={insta} alt="instagram icon"/></a>  |  
    <a href="https://github.com/jengle-dev" target="_blank"><img className="icon" src={gitHub} alt="github icon" /></a>
    </p>
    <p className="icon"></p>
  </footer>  )
}

export default Footer