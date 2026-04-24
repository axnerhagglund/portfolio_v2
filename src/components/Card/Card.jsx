import { useRef } from "react"
import "./card.css"

function TiltCard({ children, className }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale(1.02)`
  }

  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)"
  }

  return (
    <div ref={ref} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}

function Card({ card, index = 0 }) {
  return (
    <TiltCard className="card-container" style={{ animationDelay: `${index * 120}ms` }}>
      <div className="card-image-wrap">
        <img className="card-image" src={card.image} alt={card.alt} />
        <div className="card-image-shine"></div>
      </div>
      <h2 className="card-rubrik">{card.title}</h2>
      <aside className="card-button-links">
        {card.tags.map((tag, i) => (
          <span key={i} className="button-links">{tag}</span>
        ))}
      </aside>
      <p className="card-text">{card.description}</p>
      {card.link
        ? <a className="bottom-link" href={card.link} target="_blank" rel="noreferrer">View ↗</a>
        : <span className="bottom-link bottom-link--disabled">Coming soon</span>
      }
    </TiltCard>
  )
}

export default Card
