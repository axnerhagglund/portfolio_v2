import { Link } from "react-router-dom"
import { projects } from "../../data.js"
import ProjectsShowcase from "../../components/ProjectsShowcase/ProjectsShowcase.jsx"
import "./myprojectpage.css"

export default function MyProjectsPage() {
  return (
    <>
      <Link to="/" className="projects-back" aria-label="Back to home">
        <i className="ri-arrow-go-back-line" aria-hidden="true"></i>
      </Link>
      <div className="projects-page app">
        <ProjectsShowcase projects={projects} />
      </div>
    </>
  )
}
