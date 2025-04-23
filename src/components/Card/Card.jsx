import "./card.css"




function Card({card}) {

  return (
    
    
        <section className="card-container">
            <img src={card.image} alt={card.alt} />
            <h2 className="card-rubrik">{card.title}</h2>
                <aside className="card-button-links">
                <a className="button-links" href="#">Html</a>
                <a className="button-links" href="#">Css</a>
                <a className="button-links" href="#">Javascript</a>
                </aside>
            <p className="card-text">{card.description}</p>
            <a className="bottom-link" href={card.link}>View</a>
        </section>
    

  ) 
}

export default Card