import Contact from "../screens/Contact"
import Home from "../screens/Home"
import Projects from "../screens/Projects"

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
    func: () => {
      window.location.replace("https://linkedin.com/in/mitchelljfsimon")
      return null
    },
    path: "/linkedin"
  }
]
