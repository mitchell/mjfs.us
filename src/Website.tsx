import React, { Component, ReactNode } from "react"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Routes from "./routes"

import "./Website.css"

export default class Website extends Component {
  public render(): ReactNode {
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
