import React, { PureComponent } from 'react'

import './Header.css'

class Header extends PureComponent {
  render () {
    return (
      <div className='HeaderContainer'>
        <h2>Mitchell J. F. Simon</h2>
        <p>Cloud Architect, Hypremium.</p>
      </div>
    )
  }
}

export default Header
