import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { NavLink } from "react-router-dom"

import { routes } from "../../routes/routes"
import "./index.css"

type State = {
  showMenu: boolean
}

class Navbar extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { showMenu: !this.isMobile() }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  public render() {
    let menuButton: JSX.Element | null = null

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
          <div className="navbar-menu">{this.renderButtons()}</div>
        ) : null}
      </div>
    )
  }

  private isMobile() {
    const mobileMenuMaximum = 800
    return window.innerWidth <= mobileMenuMaximum
  }

  private toggleMenu() {
    if (this.isMobile() || !this.state.showMenu) {
      this.setState(prev => ({ showMenu: !prev.showMenu }))
    }
  }

  private renderButtons() {
    return routes.map(route => (
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

  private closeMenu() {
    window.scrollTo(0, 0)
    if (this.isMobile()) {
      this.setState({ showMenu: false })
    }
  }
}

export default Navbar
