import { ComponentClass, ReactNode } from "react"
import Contact from "../screens/Contact"
import Home from "../screens/Home"
import Projects from "../screens/Projects"

export type Route = {
  component: ComponentClass
  exact: boolean
  name: string
  path: string
}

export type Redirect = {
  func: () => ReactNode
  path: string
}

export const routes = [
  {
    component: Home,
    exact: true,
    name: "Home",
    path: "/"
  },
  {
    component: Projects,
    exact: false,
    name: "Projects",
    path: "/projects"
  },
  {
    component: Contact,
    exact: false,
    name: "Contact",
    path: "/contact"
  }
]

export const redirects = [
  {
    func: (): ReactNode => {
      window.location.replace("https://linkedin.com/in/mitchelljfsimon")
      return null
    },
    path: "/linkedin"
  }
]
