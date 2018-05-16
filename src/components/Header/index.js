import React from 'react'

import SmallText from '../SmallText'

import './index.css'

class Header extends React.PureComponent {
  render () {
    return (
      <div className='header-container'>
        <h2>Mitchell J. F. Simon</h2>
        <SmallText>Lead Backend Engineer, Hypremium.</SmallText>
      </div>
    )
  }
}

export default Header
