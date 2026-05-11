import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./projectsshowcase.css"

export default function ProjectsShowcase({ projects: projectList, showFilters = true }) {
  const allTags = ["All", ...new Set(projectList.flatMap(p => p.tags))]
  const [active, setActive] = useState("All")
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 699px)").matches
  )

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 699px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const filtered = showFilters
    ? (active === "All"
        ? projectList
        : projectList.filter(p => p.tags.includes(active)))
    : projectList

  const total = filtered.length

  const renderArticle = (project) => (
    <article className="ps-article" aria-label={project.title}>
      <div className={`ps-visual${project.visualSize === "large" ? " ps-visual--large" : ""}`}>
        <img
          className={`ps-image${project.blendMode === "screen" ? " ps-image--screen" : ""}`}
          src={project.image}
          alt={project.alt}
          loading="lazy"
        />
      </div>
      <h2 className="ps-title">{project.title}</h2>
      {project.meta && (
        <p className="ps-meta">{project.meta}</p>
      )}
      <p className="ps-lede">{project.description}</p>
      {project.slug
        ? (
            <Link
              className="ps-linkout"
              to={`/projects/${project.slug}`}
              viewTransition
            >
              View project
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </Link>
          )
        : project.link
          ? (
              <a
                className="ps-linkout"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Open project
                <i className="ri-arrow-right-up-line" aria-hidden="true" />
              </a>
            )
          : (
              <span className="ps-soon">Coming soon</span>
            )}
    </article>
  )

  return (
    <div className={`ps-root${showFilters ? "" : " ps-root--minimal"}`}>
      {showFilters && (
        <>
          <header className="ps-head">
            <p className="ps-filter-line">
              <span>Filter projects: {String(total).padStart(2, "0")}</span>
            </p>
            <div className="ps-filters" role="group" aria-label="Filter by tag">
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={active === tag}
                  className={`ps-chip${active === tag ? " is-active" : ""}`}
                  onClick={() => setActive(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </header>

          <div className="ps-divider" aria-hidden="true" />
        </>
      )}

      {total > 0 ? (
        isMobile ? (
          <ul className="ps-list">
            {filtered.map((project) => (
              <li key={project.id} className="ps-list-item">
                {renderArticle(project)}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="ps-grid">
            {filtered.map((project) => (
              <li key={project.id} className="ps-grid-item">
                {renderArticle(project)}
              </li>
            ))}
          </ul>
        )
      ) : (
        <p className="ps-empty">No projects match this filter.</p>
      )}
    </div>
  )
}
