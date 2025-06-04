import "./sectionOne.css"

function SectionOne() {
  return (
    <section className="sectionOne">
      <article>
      <h1 className="sectionOne__h1">Three facts</h1>
      <ul className="sectionOne__ul">
        <li className="sectionOne__li-item">Quick Learner</li>
        <li className="sectionOne__li-item">Loves Building fun applications</li>
        <li className="sectionOne__li-item">Sucker for React</li>
      </ul>
    </article>
    <img className="sectionOne__img" src="/images/axner.png" alt="" />
    </section>
    
  )
}

export default SectionOne;