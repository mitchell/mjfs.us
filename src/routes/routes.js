// @flow
import Home from "../containers/Home"
import Projects from "../containers/Projects"
// import Experience from "../containers/Experience"
import Contact from "../containers/Contact"

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
  // {
  //   path: "/experience",
  //   name: "Experience",
  //   component: Experience,
  //   exact: false
  // },
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
