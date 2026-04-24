import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./whoami.css"

export default function WhoAmI() {
  const progressRef = useRef(null)
  const ghost1Ref = useRef(null)
  const ghost2Ref = useRef(null)
  const ghost3Ref = useRef(null)
  const ghost4Ref = useRef(null)
  const photoRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0
      if (progressRef.current) progressRef.current.style.width = pct + "%"

      if (reduceMotion) return
      if (ghost1Ref.current) ghost1Ref.current.style.transform = `translateY(${scrollTop * -0.25}px)`
      if (ghost2Ref.current) ghost2Ref.current.style.transform = `translateY(${scrollTop * -0.2}px)`
      if (ghost3Ref.current) ghost3Ref.current.style.transform = `translateY(${scrollTop * -0.18}px)`
      if (ghost4Ref.current) ghost4Ref.current.style.transform = `translateY(${scrollTop * -0.22}px)`
      if (photoRef.current)  photoRef.current.style.transform  = `translateY(${scrollTop * -0.15}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const skills = [
    { name: "HTML5",      iconClass: "ri-html5-line" },
    { name: "CSS3",       iconClass: "ri-css3-line" },
    { name: "JavaScript", iconClass: "ri-javascript-line" },
    { name: "React",      iconClass: "ri-reactjs-line" },
    { name: "Node",       iconClass: "ri-nodejs-line" },
  ]
  const tools = ["Github", "VsCode", "Git Bash", "Amazon AWS", "Serverless", "Figma"]

  return (
    <div className="wai-root">
      <div className="wai-progress" ref={progressRef} aria-hidden="true"></div>

      <Link to="/" className="wai-back" aria-label="Back to home">
        <i className="ri-arrow-go-back-line" aria-hidden="true"></i>
      </Link>

      <div className="wai-page">

        {/* 01 Intro */}
        <section className="wai-section">
          <div className="wai-ghost" ref={ghost1Ref} style={{ top: "10%", left: "-5%" }} aria-hidden="true">AXNER</div>
          <div className="wai-intro-inner">
            <div className="wai-intro-label">01 — Who am I</div>
            <div className="wai-intro-row">
              <div>
                <h1 className="wai-intro-title">
                  Frontend<br />Developer.<br />
                  <span className="wai-accent">Based in GBG.</span>
                </h1>
                <p className="wai-intro-sub">
                  After seven years in logistics and sales, I made the leap into frontend
                  development. I'm a quick learner — and in this field, that matters every
                  single day.
                </p>
                <div className="wai-scroll-cue" aria-hidden="true">
                  <div className="wai-scroll-line"></div>Scroll to explore
                </div>
              </div>
              <img
                className="wai-photo"
                ref={photoRef}
                src="/images/axner.png"
                alt="Portrait of Axner"
                width="260"
                height="340"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 02 What I do */}
        <section className="wai-section">
          <div className="wai-ghost" ref={ghost2Ref} style={{ top: "15%", right: "-8%" }} aria-hidden="true">BUILD</div>
          <div className="wai-content">
            <div className="wai-section-label">02 — What I do</div>
            <h2 className="wai-section-title">I build things<br />for the web.</h2>
            <p className="wai-section-body">
              I've gathered a lot of experience in a very short time,{" "}
              <strong>due to working hard and staying motivated.</strong> I care about clean
              code, intuitive interfaces, and products that actually feel good to use.
            </p>
            <div className="wai-divider" aria-hidden="true"></div>
            <p className="wai-section-body">
              My goal right now is to{" "}
              <strong>land an internship</strong> at an inspiring web firm that loves web
              development as much as I do.
            </p>
          </div>
        </section>

        {/* 03 Skills */}
        <section className="wai-section">
          <div className="wai-ghost" ref={ghost3Ref} style={{ top: "5%", left: "-3%" }} aria-hidden="true">SKILLS</div>
          <div className="wai-content">
            <div className="wai-section-label">03 — Skills & tools</div>
            <h2 className="wai-section-title">I can speak:</h2>
            <div className="wai-skills-grid">
              {skills.map((s, i) => (
                <div className="wai-skill-chip" key={i}>
                  <i className={s.iconClass} aria-hidden="true"></i>
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
            <div className="wai-divider" aria-hidden="true"></div>
            <p className="wai-section-label" style={{ marginBottom: "1rem" }}>Dev tools</p>
            <div className="wai-tools">
              {tools.map((t, i) => <span key={i} className="wai-tool-tag">{t}</span>)}
            </div>
          </div>
        </section>

        {/* 04 Contact */}
        <section className="wai-section">
          <div className="wai-ghost" ref={ghost4Ref} style={{ top: "20%", right: "-5%" }} aria-hidden="true">HELLO</div>
          <div className="wai-content">
            <div className="wai-section-label">04 — Say hello</div>
            <p className="wai-contact-big">
              Got an opportunity?<br />Let's <span className="wai-accent">talk.</span>
            </p>
            <a
              className="wai-cta"
              href="https://www.linkedin.com/in/axnerhägglund/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-line" aria-hidden="true"></i>
              Connect on LinkedIn
              <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}
