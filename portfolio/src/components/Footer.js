import React from "react"
import gitHub from "../assets/github-square-white.png"
import linkedIn from "../assets/linkedin-white-only.png" 
import insta from "../assets/Instagram.png"
import {Link} from "react-router-dom" 
// need to install the above package

const Footer = () => {
  return (
    <footer className="fixed-bottom">
    <p>Jennifer Engle  |  ©2023  |
      {/* react component with link to = */}
    {/* <Link to={"t"}><img className="icon" src={gitHub} alt="github icon" /></Link> |   */}
    <img className="icon" src={linkedIn} alt="linkedin icon" /> |    
    <img className="icon" src={insta} alt="instagram icon"/>  |    
    <img className="icon" src={gitHub} alt="github icon" />
    </p>
    <p className="icon"></p>
  </footer>  )
}

export default Footer