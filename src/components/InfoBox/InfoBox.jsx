import "./infobox.css"

function InfoBox() {
  return (
    <section className="image-card-container">
    <img className="axner-image" src="/images/babes.jpg" alt="pic of me"/>
        <section className="image-card-text">
            <p className="image-text">Frontend developer <span className="image-text-darkgrey">Student</span> </p>
            <p className="image-text gray">Based In Gothenburg</p>
        </section>
    </section>
  )
}

export default InfoBox