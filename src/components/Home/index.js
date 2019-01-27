// @flow
import React from "react"

import "./index.css"
import profile from "../../images/profile.jpg"

type Props = {}

class Home extends React.PureComponent<Props> {
  render() {
    return (
      <div className="home-container">
        <img src={profile} alt="Profile" />
        <p>Hello and welcome,</p>
        <p>
          I am a software developer, with an expertise in serverless (FaaS)
          service architecture. Most of my experience is in web services, and
          the languages I am currently proficient in include Go, JavaScript, and
          Ruby. I build web services with APIs mostly utilizing the REST
          architectural style, and various relational and key-value DBMS. In
          addition to this, I am acclimated with JaveScript client-side
          development, like React.js & Native. I&#39;m currently working to
          acclimate myself with GraphQL and Docker deployments.
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
        <p className="signature">- Mitchell J. F. Simon, III</p>
      </div>
    )
  }
}

export default Home
