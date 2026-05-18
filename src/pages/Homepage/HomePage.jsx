import Hero from "../../components/Hero/Hero.jsx"
import ProjectsShowcase from "../../components/ProjectsShowcase/ProjectsShowcase.jsx"
import { projects } from "../../data.js"
import "./homepage.css"

function HomePage() {
  return (
    <section className="app home-page">
      <Hero />

      <section className="home-projects" aria-label="Projects">
        <div className="home-projects__kicker" aria-hidden="true">
          <span>Selected work</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>
        <ProjectsShowcase projects={projects} showFilters={false} />
      </section>
    </section>
  )
}

export default HomePage
