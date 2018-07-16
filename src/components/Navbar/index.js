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
        smallMenuClassName="navbar navbar-small"
        menu={
          <div className="navbar-menu">
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/experience"
            >
              Experience
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        }
      />
    )
  }
}

export default Navbar
