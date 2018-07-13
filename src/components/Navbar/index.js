// @flow
import React from "react"
import ResponsiveMenu from "react-responsive-navbar"
import { NavLink } from "react-router-dom"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBars from "@fortawesome/fontawesome-free-solid/faBars"

import "./index.css"

type Props = {}

class Navbar extends React.Component<Props> {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={
          <div className="navbar-button">
            <FontAwesomeIcon icon={faBars} />
          </div>
        }
        menuCloseButton={
          <div className="navbar-button navbar-button-close">
            <FontAwesomeIcon icon={faBars} />
          </div>
        }
        changeMenuOn="500px"
        largeMenuClassName="navbar"
        smallMenuClassName="navbar"
        menu={
          <div className="navbar-menu">
            <NavLink activeClassName="active-button" exact to="/">
              <div>Home</div>
            </NavLink>
            <NavLink activeClassName="active-button" to="/projects">
              <div>Projects</div>
            </NavLink>
            <NavLink activeClassName="active-button" to="/experience">
              <div>Experience</div>
            </NavLink>
            <NavLink activeClassName="active-button" to="/contact">
              <div>Contact</div>
            </NavLink>
          </div>
        }
      />
    )
  }
}

export default Navbar
