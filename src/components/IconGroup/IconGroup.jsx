import "./icongroup.css"
import { Link } from "react-router-dom"

function IconGroup() {
  return (


    <div className="icon-desktop-wrapper">
        <Link className="link" to={"/who-am-i"}>
            <section className="icons-section">
                <i className="ri-user-line icons-navbar"></i>
                <p className="icon-text">Who am i?</p>
            </section>
        </Link>

        <Link className="link" to={"/my-projects"}>
            <section className="icons-section">
                <i className="ri-code-s-slash-line icons-navbar"></i>
                <p className="icon-text">See my projects</p>
            </section>
        </Link>

            <a className="icons-section" href="https://www.linkedin.com/in/axnerh%C3%A4gglund/" >
                <i className="ri-chat-3-line icons-navbar"></i>
                <p className="icon-text">Say hello<i class="ri-arrow-right-up-line"></i></p>
            </a>
        </div>
  )
}

export default IconGroup