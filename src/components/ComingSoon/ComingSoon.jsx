import "./comingsoon.css"
import { Link } from "react-router-dom"

function ComingSoon() {
  return (
    <section className="coming__soon">
    <h1 className="coming__h1">Coming soon!</h1>
    <p className="coming__p">In progress...</p>
    <Link to ={"/"}>
      <button className="coming__button">Go back!</button>
    </Link>
  </section>
  )
}

export default ComingSoon