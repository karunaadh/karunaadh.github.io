import React, {Component} from "react"
import "./Navigation.css"
import {Menu} from "./Menu.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import {  Link } from "react-router-dom";



class Navigation extends React.Component{

  //state to hold whether the menu is open or not
  state = { active : false}

  //handle click of menu icon
  handleclick = () => {
    //set state to opposite of "active" value
    this.setState({active : !this.state.active})
  }

  render() {
    return (
      <div>
      <nav className = "navitem">

        <div className = "alignleft">

        {/*corner name*/}
        <Link to = "/" className = "navlogo">Karuna Adhikari</Link>
        <Link to = "/" className = "mobilelogo">KA</Link>

        {/*menu icons: if clicked, change state of "active" bool*/}
        <div className = "menuicon" onClick = {this.handleclick}>
          {/* according to value of "active", place either a hamburger menu or an x*/}
          {this.state.active ? <FontAwesomeIcon icon={faXmark} size={"2x"} />: <FontAwesomeIcon icon={faBars} size={"2x"}/> }
        </div>
      
      </div>

        {/*change className according to whether menu is active or not*/}
        <ul className = {this.state.active ? "active navmenu" : "navmenu"}>

          {/*map menu items into an array and add each item as a list item*/}
          {Menu.map((menuitem, index) => {
            return <li key = {index} onClick={this.handleclick}><Link to = {menuitem.link} className = {menuitem.classname}>{menuitem.title}</Link></li>
          })}
          <div className = "otherlinks"> 
          <a href = "https://www.linkedin.com/in/karuna-adhikari"  target="_blank"><FontAwesomeIcon icon = {faLinkedin} className = "brandicon"> </FontAwesomeIcon></a>
            
          <a href = "https://github.com/karunaadh"  target="_blank"><FontAwesomeIcon icon = {faGithub} className = "brandicon"> </FontAwesomeIcon>
          </a>
          </div> 

        </ul>

        {/*contact button*/}
        <Link to = "/contact" className = "contactbutton"> Contact </Link> 
      </nav>
      </div>

      
    );
  }
}

export default Navigation;