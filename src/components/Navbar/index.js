// @flow
import React from "react"
import { NavLink } from "react-router-dom"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBars from "@fortawesome/fontawesome-free-solid/faBars"

import "./index.css"

type Props = {}

type State = {
  showMenu: boolean
}

class Navbar extends React.Component<Props, State> {
  static defaultProps: Props
  changeMenu: number

  constructor(props: Props) {
    super(props)
    this.changeMenu = 800

    if (window.innerWidth <= this.changeMenu) {
      this.state = { showMenu: false }
    } else {
      this.state = { showMenu: true }
    }
  }

  toggleMenu = () => {
    if (window.innerWidth <= this.changeMenu || !this.state.showMenu) {
      this.setState(prev => ({ showMenu: !prev.showMenu }))
    }
  }

  render() {
    let menuButton = null

    if (window.innerWidth <= this.changeMenu) {
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
              onClick={this.toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/projects"
              onClick={this.toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/experience"
              onClick={this.toggleMenu}
            >
              Experience
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/contact"
              onClick={this.toggleMenu}
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
