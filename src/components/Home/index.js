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
          More specifically, for the past year, I have been focused on Go web
	  services with cloud-native architectures. Tech that I love working
	  with includes Go, TypeScript, gRPC, Serverless, Docker, Redis, and
	  PostgreSQL. Concepts that I am currently focused on are Docker
	  containerization and orchestration, microservices project architecture
	  w/ dependency injection, and infrastructure as code using Terraform.
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
