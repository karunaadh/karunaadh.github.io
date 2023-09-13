import React from 'react';
import "./Home.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className = "home">

      <div className = "homebody">
        <div>
        <h1 className = "header-name"> Karuna Adhikari </h1>
        <div>
          <Typed
            strings={["Aspiring Engineer...", "Innovator..."]}
            typeSpeed={70}
            backSpeed={60}
            loop
          />
        </div>
        {/*<p className = "btnres"><button className = "resumebutton"> Resume </button></p>*/}
        </div>

        <div className = "otherlinks"> 
            <a href = "https://www.linkedin.com/in/karuna-adhikari"  target="_blank"><FontAwesomeIcon icon = {faLinkedin} className = "brand"> </FontAwesomeIcon></a>
              
            <a href = "https://github.com/karunaadh"  target="_blank"><FontAwesomeIcon icon = {faGithub} className = "brand"> </FontAwesomeIcon></a>
        </div> 
      </div>
    
    </div>
  )
}


export default Home