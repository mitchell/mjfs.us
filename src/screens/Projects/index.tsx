import React, { PureComponent, ReactNode } from "react"

import Project from "../../components/Project"
import projects from "../../data/projects.json"
import "./index.css"

type BadgeData = {
  imgUrl: string
  linkUrl: string
  alt: string
}

type ProjectData = {
  title: string
  repoUrl: string
  badges: BadgeData[]
  description: string
}

export default class Projects extends PureComponent {
  public render(): ReactNode {
    return <div className="projects-container">{this.renderProjects()}</div>
  }

  private renderProjects(): ReactNode[] {
    return projects.map((project: ProjectData) => (
      <Project
        key={project.title}
        title={project.title}
        repoUrl={project.repoUrl}
        badges={project.badges}
      >
        {project.description}
      </Project>
    ))
  }
}
