import React, { Component } from 'react'

import Navbar from './components/Navbar/Navbar.js'

import './Website.css'

class Website extends Component {
  render () {
    return (
      <div className='Website'>
        <p>Hello, my dudes.</p>
        <Navbar />
      </div>
    )
  }
}

export default Website
