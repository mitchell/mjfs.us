import React from 'react'

import ClearButton from '../../components/ClearButton'

import './index.css'

class Projects extends React.PureComponent {
  render () {
    return (
      <div className='projects-container'>
        <div>
          <h4>www.mitchelljfsimon.com</h4>
          <p>
            This website has taken many forms over the years, as my frontend
            and design skills increase. It has been simple HTML, CSS, and JS,
            and a Ruby Sinatra web app. Currently it takes the form of a
            React.js app. I enjoy React.js (and similar frontend frameworks)
            as they can be used to make even the simplest projects modular and
            extensible.
          </p>
          <ClearButton href='https://github.com/mitchelljfs/react-website'>Repository</ClearButton>
        </div>
        <div>
          <h4>destinate</h4>
          <p>
            destinate is a react-native, iOS (and Android) app. Its main objective
            is to suggest places or activities to the user based on their past
            choices. It utilizes a serverless backend, written in Go and hosted
            on AWS API Gateway/Lambda. It is still under development, as a side
            project of Arash Lari and I.
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
