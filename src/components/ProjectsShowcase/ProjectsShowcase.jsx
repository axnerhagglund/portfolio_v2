import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Mousewheel } from "swiper/modules"
import "swiper/css"
import "./projectsshowcase.css"

function syncSlidePerView(swiper) {
  const v = swiper.params.slidesPerView
  return typeof v === "number" ? v : 1
}

export default function ProjectsShowcase({ projects: projectList, showFilters = true }) {
  const allTags = ["All", ...new Set(projectList.flatMap(p => p.tags))]
  const [active, setActive] = useState("All")
  const [slideIdx, setSlideIdx] = useState(0)
  const [perView, setPerView] = useState(1)
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
  const pageCount = total === 0
    ? 0
    : total > perView
      ? total - perView + 1
      : 1
  const countStr = String(Math.max(1, pageCount)).padStart(2, "0")
  const idxStr = pageCount > 0
    ? String(Math.min(slideIdx + 1, pageCount)).padStart(2, "0")
    : "00"

  const renderArticle = (project) => (
    <article className="ps-article" aria-label={project.title}>
      <div className="ps-visual">
        <img
          className="ps-image"
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
              {!isMobile && (
                <span className="ps-filter-index" aria-live="polite">
                  {idxStr} / {countStr}
                </span>
              )}
            </p>
            <div className="ps-filters" role="group" aria-label="Filter by tag">
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={active === tag}
                  className={`ps-chip${active === tag ? " is-active" : ""}`}
                  onClick={() => {
                    setActive(tag)
                    setSlideIdx(0)
                  }}
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
          <div className="ps-showcase">
            <Swiper
              key={showFilters ? active + String(total) : `all-${total}`}
              className="ps-swiper"
              modules={[Mousewheel, Keyboard]}
              slidesPerView={1}
              spaceBetween={16}
              speed={650}
              autoHeight
              centeredSlides={total === 1}
              grabCursor={total > 1}
              allowTouchMove={total > 1}
              keyboard={{ enabled: total > 1 }}
              breakpoints={{
                700: { slidesPerView: Math.min(2, total), spaceBetween: 20 },
                1100: { slidesPerView: Math.min(3, total), spaceBetween: 24 }
              }}
              onSwiper={s => {
                setPerView(syncSlidePerView(s))
                setSlideIdx(s.activeIndex)
              }}
              onBreakpoint={s => setPerView(syncSlidePerView(s))}
              onResize={s => setPerView(syncSlidePerView(s))}
              mousewheel={{
                sensitivity: 0.75,
                releaseOnEdges: true,
                thresholdDelta: 20
              }}
              onSlideChange={s => setSlideIdx(s.activeIndex)}
            >
              {filtered.map((project) => (
                <SwiperSlide key={project.id} className="ps-slide">
                  {renderArticle(project)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
      ) : (
        <p className="ps-empty">No projects match this filter.</p>
      )}
    </div>
  )
}
