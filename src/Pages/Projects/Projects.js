import React, {useState} from "react"
import "./Projects.css"
import {Projectlist} from "./Projectlist.js"

const Photos = (props) => {
  //get project item as a prop
  const {photo} = props;
  //set state for image to be used and add default
  const [images, setimages] = useState (photo.image);

  //onhover
  const handlehover = () => {
    setimages(photo.hover);
  }

  //onunhover
  const handleunhover = () => {
    setimages(photo.image);
  }

  return (
    <img 
      src = {images}
      onMouseOver = {() => handlehover()}
      onMouseOut={() => handleunhover()}
      className = "projectimg"> 
    </img>

  )
}

const Projects = () => {
  return(
    <div className = "projects">
      <div className = "projectscontent">
        <h1 className = "projectstitle">Projects</h1>
        <div className = "projectgallery">
          {Projectlist.map((projectitem, index) => {
            return (
              <div className = "projectitem" key = {index}>
              <h3 className = "projectitemtitle"> {projectitem.title}</h3>
              <a href = {projectitem.link} target="_blank">
                <Photos photo = {projectitem} /> 
              </a>
              <p className = "projectdescription">{projectitem.description}</p>
              <p className = "tool"><b>Created with:</b> {projectitem.tool}</p>
              </div>
            )
          })}

        
        <div className = "futureprojects">
        <h3 className = "projectitemtitle">Upcoming...</h3>
          <p className ="FPdes">E-commerce frontend with Alan A.I. assisted Shopping Cart <b>[ReactJS]</b></p>
          <p className ="FPdes">Weather App <b>[Python]</b></p>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Projects