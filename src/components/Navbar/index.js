// @flow
import React from "react"
import { NavLink } from "react-router-dom"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBars from "@fortawesome/fontawesome-free-solid/faBars"

import "./index.css"

const changeMenu = 800

type Props = {}

type State = {
  showMenu: boolean
}

class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    if (window.innerWidth <= changeMenu) {
      this.state = { showMenu: false }
    } else {
      this.state = { showMenu: true }
    }
  }

  closeMenu = () => {
    window.scrollTo(0, 0)
    if (window.innerWidth <= changeMenu) {
      this.setState({ showMenu: false })
    }
  }

  toggleMenu = () => {
    if (window.innerWidth <= changeMenu || !this.state.showMenu) {
      this.setState(prev => ({ showMenu: !prev.showMenu }))
    }
  }

  render() {
    let menuButton = null

    if (window.innerWidth <= changeMenu) {
      menuButton = (
        <div
          className={
            this.state.showMenu
              ? "navbar-button navbar-button-closed"
              : "navbar-button"
          }
          onClick={this.toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      )
    }

    return (
      <div className="navbar">
        {menuButton}
        {this.state.showMenu ? (
          <div className="navbar-menu">
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              exact
              to="/"
              onClick={this.closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/projects"
              onClick={this.closeMenu}
            >
              Projects
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/experience"
              onClick={this.closeMenu}
            >
              Experience
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/contact"
              onClick={this.closeMenu}
            >
              Contact
            </NavLink>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Navbar
