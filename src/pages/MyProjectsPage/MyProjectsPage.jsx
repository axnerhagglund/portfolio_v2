import { useState } from "react"
import { projects } from "../../data.js"
import Card from "../../components/Card/Card.jsx"
import "./myprojectpage.css"

export default function MyProjectsPage() {
  const allTags = ["All", ...new Set(projects.flatMap(p => p.tags))]
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <div className="projects-page app">
      <div className="projects-header">
        <div className="projects-label">Portfolio</div>
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-count">{filtered.length} project{filtered.length !== 1 ? "s" : ""}</p>
      </div>

      <div className="projects-filters">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`filter-chip${active === tag ? " active" : ""}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, i) => (
          <Card key={project.id} card={project} index={i} />
        ))}
      </div>
    </div>
  )
}
