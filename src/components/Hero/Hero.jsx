import "./hero.css"
import InfoBox from "../InfoBox/InfoBox"
import IconGroup from "../IconGroup/IconGroup"
function Hero() {
  return (
    <>
    <section className="hero">
        <h1 className="hero__title">Hey,<br></br> I'm <span className="hero__title-axner">Axner</span></h1>
        <InfoBox />
        <p className="hero-subrubrik"> I am a curious and solution-oriented frontend developer
        with a passion for creating user-friendly and visually appealing web applications.</p>
    </section>

        <IconGroup />
        
    </>
    
  )
}

export default Hero