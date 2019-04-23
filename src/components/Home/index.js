// @flow
import React from 'react'

import './index.css'
import profile from '../../images/profile.jpg'

type Props = {}

class Home extends React.PureComponent<Props> {
  render () {
    return (
      <div className='home-container'>
        <img src={profile} alt='Profile' />
        <p>Hello and welcome,</p>
        <p>
          I am a software developer, with most of my experience in web services.
          I love working with Golang, gRPC, TypeScript, and Redis. I have
          experience working with Serverless, DynamoDB, PostgreSQL, Node.js, 
        </p>
        <p>
          My professional interests, aside from the above, include software
          architecture, system administration, development tools, and business
          development. My personal interests include music performance, skiing,
          and politics.
        </p>
        <p />
        <p>
          Thank you for reading my quick bio. If you would like to contact me
          visit the contact page for all of your options.
        </p>
        <p className='signature'>- Mitchell J. F. Simon, III</p>
      </div>
    )
  }
}

export default Home
