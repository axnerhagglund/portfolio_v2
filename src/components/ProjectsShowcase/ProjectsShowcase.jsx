import { useState } from "react"
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

  return (
    <div className={`ps-root${showFilters ? "" : " ps-root--minimal"}`}>
      {showFilters && (
        <>
          <header className="ps-head">
            <p className="ps-filter-line">
              <span>Filter projects: {String(total).padStart(2, "0")}</span>
              <span className="ps-filter-index" aria-live="polite">
                {idxStr} / {countStr}
              </span>
            </p>
            <div className="ps-filters" role="tablist" aria-label="Filter by tag">
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={active === tag}
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
        <div className="ps-showcase">
          <Swiper
            key={showFilters ? active + String(total) : `all-${total}`}
            className="ps-swiper"
            modules={[Mousewheel, Keyboard]}
            slidesPerView={1}
            spaceBetween={16}
            speed={650}
            autoHeight
            grabCursor
            keyboard={{ enabled: true }}
            breakpoints={{
              700: { slidesPerView: 2, spaceBetween: 20 },
              1100: { slidesPerView: 3, spaceBetween: 24 }
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
                <article className="ps-article" aria-label={project.title}>
                  <div className="ps-visual">
                    <div className="ps-frame">
                      <img
                        className="ps-frame-img"
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                      />
                      <div className="ps-frame-notch" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="ps-title">{project.title}</h2>
                  {project.meta && (
                    <p className="ps-meta">{project.meta}</p>
                  )}
                  <p className="ps-lede">{project.description}</p>
                  {project.link
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="ps-empty">No projects match this filter.</p>
      )}
    </div>
  )
}
