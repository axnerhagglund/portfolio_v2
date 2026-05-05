import { useEffect, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { projects } from "../../data.js"
import "./projectdetail.css"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  const progressRef = useRef(null)
  const coverRef = useRef(null)
  const cupsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      if (progressRef.current) progressRef.current.style.width = pct + "%"

      if (reduceMotion) return
      if (coverRef.current) coverRef.current.style.transform = `translateY(${scrollTop * -0.08}px)`

      cupsRef.current.forEach((el) => {
        if (!el) return
        el.style.transform = `rotate(${scrollTop * 0.25}deg)`
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const setCupRef = (i) => (el) => { cupsRef.current[i] = el }

  if (!project) {
    return (
      <div className="pd-root">
        <Link to="/" className="pd-back" aria-label="Back to home">
          <span aria-hidden="true">←</span> Back
        </Link>
        <main className="pd-page">
          <section className="pd-section pd-section--intro">
            <h1 className="pd-display">No project here.</h1>
            <p className="pd-body">
              That project doesn't exist, or it isn't published yet. Head
              back home and pick another.
            </p>
          </section>
        </main>
      </div>
    )
  }

  const d = project.detail || {}

  return (
    <div className="pd-root">
      <div className="pd-progress" ref={progressRef} aria-hidden="true"></div>

      <Link to="/" className="pd-back" aria-label="Back to home">
        <span aria-hidden="true">←</span> Back
      </Link>

      <main className="pd-page">

        <section className="pd-section pd-section--intro">
          <h1 className="pd-display">{project.title}</h1>

          <div className="pd-intro-grid">
            <div className="pd-intro-text">
              {d.tagline && (
                <p className="pd-lede">{d.tagline}</p>
              )}
              <dl className="pd-meta">
                {d.year &&   (<><dt>Year</dt><dd>{d.year}</dd></>)}
                {d.role &&   (<><dt>Role</dt><dd>{d.role}</dd></>)}
                {d.status && (<><dt>Status</dt><dd>{d.status}</dd></>)}
              </dl>
            </div>
            <figure className="pd-cover-wrap" ref={coverRef}>
              <img
                className="pd-cover"
                src={project.image}
                alt={project.alt}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        {(d.overview || d.problem || d.approach) && (
          <>
            <div className="pd-aster" aria-hidden="true">
              <img className="pd-cup" ref={setCupRef(0)} src="/images/cup.png" alt="" />
            </div>

            <section className="pd-section">
              {d.overview && (
                <p className="pd-body pd-body--lg">{d.overview}</p>
              )}
              {d.problem && (
                <>
                  <h2 className="pd-h2">The problem.</h2>
                  <p className="pd-body">{d.problem}</p>
                </>
              )}
              {d.approach && (
                <>
                  <h2 className="pd-h2">The approach.</h2>
                  <p className="pd-body">{d.approach}</p>
                </>
              )}
            </section>
          </>
        )}

        {(d.stack?.length || d.gallery?.length) && (
          <>
            <div className="pd-aster" aria-hidden="true">
              <img className="pd-cup" ref={setCupRef(1)} src="/images/cup.png" alt="" />
            </div>

            <section className="pd-section">
              {d.stack?.length > 0 && (
                <>
                  <h2 className="pd-h2">Built with.</h2>
                  <p className="pd-toolbox">
                    {d.stack.map((t, i) => (
                      <span key={t} className="pd-toolbox-item">
                        {t}
                        {i < d.stack.length - 1 && <span className="pd-toolbox-sep"> · </span>}
                      </span>
                    ))}
                  </p>
                </>
              )}

              {d.gallery?.length > 0 && (
                <div className="pd-gallery">
                  {d.gallery.map((g, i) => (
                    <figure key={i} className="pd-gallery-item">
                      <img src={g.src} alt={g.alt} loading="lazy" />
                    </figure>
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        <div className="pd-aster" aria-hidden="true">
          <img className="pd-cup" ref={setCupRef(2)} src="/images/cup.png" alt="" />
        </div>

        <section className="pd-section pd-section--end">
          {d.links?.length > 0 ? (
            <>
              <h2 className="pd-display pd-display--end">Take a look.</h2>
              <div className="pd-links">
                {d.links.map((l, i) => (
                  <a
                    key={i}
                    className="pd-cta"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{l.label}</span>
                    <span aria-hidden="true" className="pd-cta-arrow">→</span>
                  </a>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="pd-display pd-display--end">Still cooking.</h2>
              <p className="pd-body pd-body--lg">
                Live demo and write-up are landing soon. Reach out and I'll
                walk you through it.
              </p>
            </>
          )}

          <Link to="/" className="pd-linkout">
            <span aria-hidden="true">←</span> Back to all projects
          </Link>
        </section>

      </main>
    </div>
  )
}
