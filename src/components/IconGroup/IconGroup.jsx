import "./icongroup.css"
import { Link } from "react-router-dom"

function IconGroup() {
  return (
    <>
      {/* Desktop: vertical column pinned to the right edge */}
      <nav className="icon-rail" aria-label="Primary">
        <Link className="icons-section" to="/who-am-i">
          <i className="ri-user-line icons-navbar" aria-hidden="true"></i>
          <p className="icon-text">Who am I</p>
        </Link>

        <a
          className="icons-section"
          href="https://www.linkedin.com/in/axnerhägglund/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-chat-3-line icons-navbar" aria-hidden="true"></i>
          <p className="icon-text">
            Say hello
            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
          </p>
        </a>
      </nav>

      {/* Mobile: simple inline strip */}
      <nav className="icon-mobile" aria-label="Primary">
        <Link to="/who-am-i" className="icon-mobile__link">
          <i className="ri-user-line" aria-hidden="true"></i>
          Who am I
        </Link>
        <a
          href="https://www.linkedin.com/in/axnerhägglund/"
          target="_blank"
          rel="noreferrer"
          className="icon-mobile__link"
        >
          <i className="ri-chat-3-line" aria-hidden="true"></i>
          Say hello <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
        </a>
      </nav>
    </>
  )
}

export default IconGroup
