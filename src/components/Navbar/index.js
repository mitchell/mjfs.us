// @flow
import * as React from "react"
import { NavLink } from "react-router-dom"
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBars from "@fortawesome/fontawesome-free-solid/faBars"

import "./index.css"
import { routes } from "../../routes/routes.js"

const changeMenu = 800

type Props = {}

type State = {
  showMenu: boolean
}

class Navbar extends React.Component<Props, State> {
  buttons: Array<NavLink<string>>

  constructor(props: Props) {
    super(props)

    if (window.innerWidth <= changeMenu) {
      this.state = { showMenu: false }
    } else {
      this.state = { showMenu: true }
    }

    this.buttons = routes.map(route => (
      <NavLink
        key={route.name}
        className="navbar-menu-button"
        activeClassName="active-button"
        exact={route.exact}
        to={route.path}
        onClick={this.closeMenu}
      >
        {route.name}
      </NavLink>
    ))
  }

  isMobile = () => window.innerWidth <= changeMenu

  closeMenu = () => {
    window.scrollTo(0, 0)
    if (this.isMobile()) {
      this.setState({ showMenu: false })
    }
  }

  toggleMenu = () => {
    if (this.isMobile() || !this.state.showMenu) {
      this.setState(prev => ({ showMenu: !prev.showMenu }))
    }
  }

  render() {
    let menuButton: ?React.Element<string>

    if (this.isMobile()) {
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
          <div className="navbar-menu">{this.buttons}</div>
        ) : null}
      </div>
    )
  }
}

export default Navbar
