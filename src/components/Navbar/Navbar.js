import React, { Component } from 'react'

import ResponsiveMenu from 'react-responsive-navbar'

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
            <p>Home</p>
            <p>Projects</p>
            <p>Experience</p>
            <p>Contact</p>
          </div>
        }
      />
    )
  }
}

export default Navbar
