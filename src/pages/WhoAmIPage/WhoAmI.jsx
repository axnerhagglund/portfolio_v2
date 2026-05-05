import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./whoami.css"

export default function WhoAmI() {
  const progressRef = useRef(null)
  const photoRef = useRef(null)
  const cupsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      if (progressRef.current) progressRef.current.style.width = pct + "%"

      if (reduceMotion) return
      if (photoRef.current) photoRef.current.style.transform = `translateY(${scrollTop * -0.08}px)`

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

  const toolbox = [
    "HTML", "CSS", "JavaScript", "React",
    "Next.js", "Tailwind.css", "Figma", "Supabase", "AWS",
  ]

  return (
    <div className="wai-root">
      <div className="wai-progress" ref={progressRef} aria-hidden="true"></div>

      <Link to="/" viewTransition className="wai-back" aria-label="Back to home">
        <span aria-hidden="true">←</span> Back
      </Link>

      <main className="wai-page">

        <section className="wai-section wai-section--intro">
          <h1 className="wai-display">
            Axner<br/>
            Hägglund.
          </h1>

          <div className="wai-intro-grid">
            <div className="wai-lede-col">
              <p className="wai-lede">
                Frontend developer in Göteborg. Seven years in logistics
                and sales, then I started writing code and stopped wanting
                to do anything else.
              </p>
              <p className="wai-body">
                The first React component I shipped felt better than any
                quarterly bonus. I came to this work late, which turns out
                to be the point. I know what I want to spend my Mondays on
                now.
              </p>
            </div>

            <figure className="wai-figure">
              <img
                className="wai-photo"
                ref={photoRef}
                src="/images/axner.png"
                alt="Portrait of Axner"
                width="260"
                height="340"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <div className="wai-aster" aria-hidden="true">
          <img className="wai-cup" ref={setCupRef(0)} src="/images/cup.png" alt="" />
        </div>

        <section className="wai-section">
          <h2 className="wai-h2">On the work.</h2>
          <p className="wai-body wai-body--lg">
            I build for the web. Mostly React, plenty of vanilla CSS, the
            occasional Node service when something needs to talk to a
            database. I care about interfaces that don't waste your time
            and code that someone else can read on a Monday morning.
          </p>
          <p className="wai-body">
            I notice the small things. The hover that lands a beat too late.
            The button whose label drifts when it loads. The kind of details
            people feel without naming.
          </p>
          <p className="wai-pull">
            Looking for a team that takes the craft of this seriously.
            If that's you, we should talk.
          </p>
        </section>

        <div className="wai-aster" aria-hidden="true">
          <img className="wai-cup" ref={setCupRef(1)} src="/images/cup.png" alt="" />
        </div>

        <section className="wai-section">
          <h2 className="wai-h2">The toolbox.</h2>
          <p className="wai-toolbox">
            {toolbox.map((t, i) => (
              <span key={t} className="wai-toolbox-item">
                {t}
                {i < toolbox.length - 1 && <span className="wai-toolbox-sep"> · </span>}
              </span>
            ))}
          </p>
        </section>

        <div className="wai-aster" aria-hidden="true">
          <img className="wai-cup" ref={setCupRef(2)} src="/images/cup.png" alt="" />
        </div>

        <section className="wai-section wai-section--end">
          <h2 className="wai-display wai-display--end">
            Want&nbsp;to&nbsp;talk?
          </h2>
          <a
            className="wai-cta"
            href="https://www.linkedin.com/in/axnerhägglund/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Find me on LinkedIn</span>
            <span aria-hidden="true" className="wai-cta-arrow">→</span>
          </a>
        </section>

      </main>
    </div>
  )
}
