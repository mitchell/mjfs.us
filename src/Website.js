import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Projects from './screens/Projects'

import './Website.css'

class Website extends Component {
  render () {
    return (
      <div className='website'>
        <div className='main-container'>
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
