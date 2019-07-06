// @flow
import * as React from 'react'

import ProjectComponent from '../../components/Project'

import './index.css'

import projectsData from '../../data/projects.json'

type Props = {}

type Badge = {
  imgUrl: string,
  linkUrl: string,
  alt: string
}

type Project = {
  title: string,
  repoUrl: string,
  badges: Array<Badge>,
  description: string
}

class Projects extends React.PureComponent<Props> {
  renderProjects = (projects: Array<Project>) => {
    return projects.map(project => (
      <ProjectComponent
        key={project.title}
        title={project.title}
        repoUrl={project.repoUrl}
        badges={project.badges}
      >
        {project.description}
      </ProjectComponent>
    ))
  }

  render () {
    return (
      <div className='projects-container'>
        {this.renderProjects(projectsData)}
      </div>
    )
  }
}

export default Projects
