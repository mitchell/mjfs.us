import React, { PureComponent } from 'react'

import './Home.css'
import profile from '../../images/profile.jpg'

class Home extends PureComponent {
  render () {
    return (
      <div className='HomeContainer'>
        <img src={profile} alt='Profile' />
        <p>Hello and welcome,</p>
        <p>
          My name is Mitchell Simon. I am a Computer Science major at Loyola
          Marymount University, Backend Software Developer at Hypremium, and I
          offer my skills as a freelance web developer, and freelance
          software/application developer.
        </p>
        <p>
          My academic interests include full stack web development (with an
          emphasis on backend), system administration, network architecture,
          software engineering, cybersecurity, and business administration. My
          personal interests include music performance, skiing, and politics.
        </p>
        <p>
          Thank you for reading my quick bio. If you would like to contact me
          visit the contact page for all of the options.
        </p>
        <p className='signature'>-- Mitchell J. F. Simon, III</p>
      </div>
    )
  }
}

export default Home
