import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Component, ReactNode } from "react"
import { NavLink } from "react-router-dom"

import { Route, routes } from "../../routes/routes"
import "./index.css"

type State = {
  showMenu: boolean
}

export default class Navbar extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { showMenu: !this.isMobile() }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.renderButtons = this.renderButtons.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.menuButton = this.menuButton.bind(this)
  }

  public render(): ReactNode {
    return (
      <div className="navbar">
        {this.menuButton()}
        {this.state.showMenu && (
          <div className="navbar-menu">{this.renderButtons()}</div>
        )}
      </div>
    )
  }

  private menuButton(): ReactNode {
    if (this.isMobile()) {
      return (
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

    return null
  }

  private isMobile(): boolean {
    const mobileMenuMaximum = 800
    return window.innerWidth <= mobileMenuMaximum
  }

  private toggleMenu(): void {
    if (this.isMobile() || !this.state.showMenu) {
      this.setState((prev: State) => ({ showMenu: !prev.showMenu }))
    }
  }

  private renderButtons(): ReactNode {
    return routes.map((route: Route) => (
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

  private closeMenu(): void {
    window.scrollTo(0, 0)
    if (this.isMobile()) {
      this.setState({ showMenu: false })
    }
  }
}
