import React from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./containers/Home"
import Projects from "./containers/Projects"
import Experience from "./containers/Experience"
import Contact from "./containers/Contact"

import "./Website.css"

class Website extends React.Component {
  render() {
    return (
      <div className="website">
        <div className="main-container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Navbar />
        </div>
      </div>
    )
  }
}

export default Website
