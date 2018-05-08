import React from 'react'

import './index.css'
import profile from '../../images/profile.jpg'

class Home extends React.PureComponent {
  render () {
    return (
      <div className='home-container'>
        <img src={profile} alt='Profile' />
        <p>Hello and welcome,</p>
        <p>
          My name is Mitchell Simon. I am a DevOps & Software Engineer at
          Hypremium, Computer Science major at Loyola Marymount University, and
          I offer my skills as a consulting web & software developer.
        </p>
        <p>
          My professional interests include full-stack web development (with an
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
