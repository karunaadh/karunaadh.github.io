import React from "react";
import "./style.css";
import Navigation from "./Pages/Navigation/Navigation.js";
import Projects from "./Pages/Projects/Projects.js";
import Contact from "./Pages/Contact/Contact.js";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path = '/' exact component={Home} />
         <Route path='/about' component={About} />
         <Route path='/projects' component={Projects} />
         <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      
    </div>
  );
}
