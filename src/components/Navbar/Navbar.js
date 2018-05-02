import React, { Component } from 'react'
import ResponsiveMenu from 'react-responsive-navbar'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
  render () {
    return (
      <ResponsiveMenu
        menuOpenButton={<div className='Navbar-Button'>Menu</div>}
        menuCloseButton={<div className='Navbar-Button'>Close</div>}
        changeMenuOn='500px'
        largeMenuClassName='Navbar'
        smallMenuClassName='Navbar'
        menu={
          <div className='Navbar-Menu'>
            <NavLink activeClassName='Active-Button' exact to='/'><div>Home</div></NavLink>
            <NavLink activeClassName='Active-Button' to='/projects'><div>Projects</div></NavLink>
            <NavLink activeClassName='Active-Button' to='/experience'><div>Experience</div></NavLink>
            <NavLink activeClassName='Active-Button' to='/contact'><div>Contact</div></NavLink>
          </div>
        }
      />
    )
  }
}

export default Navbar
