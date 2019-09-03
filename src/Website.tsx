import React from "react"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Routes from "./routes"

import "./Website.css"

export default class Website extends React.Component {
  public render() {
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
