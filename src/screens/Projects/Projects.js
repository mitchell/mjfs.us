import React, { PureComponent } from 'react'

import ClearButton from '../../components/ClearButton/ClearButton.js'

import './Projects.css'

class Projects extends PureComponent {
  render () {
    return (
      <div className='ProjectsContainer'>
        <div>
          <h4>www.mitchelljfsimon.com</h4>
          <p>
            This website has taken many forms over the years, as my frontend
            and design skills increase. It started as a simple static site
            using HTML, CSS, and a little bit of Javascript. Then it became
            simple web app using Ruby and the Sinatra framework. Currently it
            takes the form of a React.js app. This may be considered over-kill,
            but I believe React.js (and other similar frontend frameworks) can
            be used to make even the simplest projects modular and extensible.
          </p>
          <ClearButton href='https://github.com/mitchelljfs/react-website'>Repository</ClearButton>
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
            popular social media platform Reddit. A possible prototype database
            for Reddit to run on Neo4j. It can show the relationships between
            users, their comments, and subreddits. With this information we can
            infer demographic information about reddits users. For example we
            could see which subreddits have the same users who post comments,
            and where else they post.
          </p>
          <ClearButton href='https://github.com/mitchelljfs/comment_context_analysis'>Repository</ClearButton>
        </div>
      </div>
    )
  }
}

export default Projects
