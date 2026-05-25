import "./infobox.css"

function InfoBox() {
  return (
    <div className="image-card-container">
      <img className="axner-image" src="/images/babes.jpg" alt="Portrait of Axner Hägglund" />
      <div className="image-card-text">
        <p className="image-text">Frontend developer</p>
        <p className="image-text image-text--secondary">Based in Göteborg</p>
      </div>
    </div>
  )
}

export default InfoBox