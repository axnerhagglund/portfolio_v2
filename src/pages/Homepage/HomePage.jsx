import Hero from "../../components/Hero/Hero.jsx"
import ProjectsShowcase from "../../components/ProjectsShowcase/ProjectsShowcase.jsx"
import { projects } from "../../data.js"
import "./homepage.css"

function HomePage() {
  return (
    <section className="app home-page">
      <Hero />

      <section className="home-projects" aria-label="Projects">
        <ProjectsShowcase projects={projects} showFilters={false} />
      </section>
    </section>
  )
}

export default HomePage
