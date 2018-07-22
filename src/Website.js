// @flow
import React from "react"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Routes from "./routes"

import "./Website.css"

type Props = {}

class Website extends React.Component<Props> {
  render() {
    return (
      <div className="website">
        <div className="main-container">
          <Navbar />
          <Header />
          <Routes />
        </div>
      </div>
    )
  }
}

export default Website
