// @flow
import Home from "../components/Home"
import Projects from "../containers/Projects"
import Contact from "../components/Contact"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact: true
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    exact: false
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    exact: false
  }
]

const redirects = [
  {
    path: "/linkedin",
    func: () => (window.location = "https://linkedin.com/in/mitchelljfsimon")
  }
]

export { routes, redirects }
