import React, { PureComponent, ReactNode } from "react"

import Project from "../../components/Project"

import "./index.css"

import projectsData from "../../data/projects.json"

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
    return (
      <div className="projects-container">
        {this.renderProjects(projectsData)}
      </div>
    )
  }

  private renderProjects(projects: ProjectData[]): ReactNode[] {
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
