import React, { PureComponent } from 'react'

import ClearButton from '../../components/ClearButton'

import './index.css'

class Projects extends PureComponent {
  render () {
    return (
      <div className='projects-container'>
        <div>
          <h4>www.mitchelljfsimon.com</h4>
          <p>
            This website has taken many forms over the years, as my frontend
            and design skills increase. It has been simple HTML, CSS, and JS,
            and a Ruby Sinatra web app. Currently it takes the form of a
            React.js app. I enjoy React.js (and other similar frontend frameworks)
            can be used to make even the simplest projects modular and extensible.
          </p>
          <ClearButton href='https://github.com/mitchelljfs/react-website'>Repository</ClearButton>
        </div>
        <div>
          <h4>destinate</h4>
          <p>
            Destinate is react-native, iOS and Android app. Its main objective
            is to suggest places or activities to the user based on there past
            choices. It utilizes a Serverless Framework backend, written in Go
            and hosted on AWS. It is still under-development, as a side-project
            of Arash Lari and I.
          </p>
          <ClearButton href='https://github.com/mitchelljfs/destinate'>Repository</ClearButton>
        </div>
        <div>
          <h4>memebank API</h4>
          <p>
            This is a RESTful API using the Rails framework to support the
            front end application of memebank. It uses JWT authentication for
            stateless account authentication, and bcrypt for password
            encryption. It communicates with the front-end using basic HTTP
            requests and JSON objects.
          </p>
          <ClearButton href='https://github.com/aherco/memebank-api'>Repository</ClearButton>
        </div>
        <div>
          <h4>reddit Neo4J Database</h4>
          <p>
            A learning Neo4j database project of a sample of comments on the
            popular social media platform Reddit. It can show the relationships between
            users, their comments, and subreddits. With this information we can
            infer demographic information about reddit's users.
          </p>
          <ClearButton href='https://github.com/mitchelljfs/comment_context_analysis'>Repository</ClearButton>
        </div>
      </div>
    )
  }
}

export default Projects
