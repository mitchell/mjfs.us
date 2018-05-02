import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header.js'
import Navbar from './components/Navbar/Navbar.js'
import Home from './screens/Home/Home.js'
import Projects from './screens/Projects/Projects.js'

import './Website.css'

class Website extends Component {
  render () {
    return (
      <div className='Website'>
        <div className='MainContainer'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/experience' component={null} />
            <Route path='/contact' component={null} />
          </Switch>
          <Navbar />
        </div>
      </div>
    )
  }
}

export default Website
