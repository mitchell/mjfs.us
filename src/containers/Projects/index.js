// @flow
import React from "react"

import Project from "../../components/Project"

import "./index.css"

import projects from "../../data/projects.json"

type Props = {}

class Projects extends React.PureComponent<Props> {
  render() {
    let projectComponents = projects.map(project => (
      <Project
        key={project.title}
        title={project.title}
        repoUrl={project.repoUrl}
        badges={project.badges}
      >
        {project.description}
      </Project>
    ))

    return <div className="projects-container">{projectComponents}</div>
  }
}

export default Projects
