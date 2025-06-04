import "./card.css"




function Card({card}) {
  

  return (
    
    
        <section className="card-container">
            <img className="card-image" src={card.image} alt={card.alt} />
            <h2 className="card-rubrik">{card.title}</h2>
                <aside className="card-button-links">
                {card.tags.map((tags, index) => (
                  <a key={index} className="button-links" href="#">
                    {tags}
                  </a>
                ))}
      </aside>
            <p className="card-text">{card.description}</p>
            <a className="bottom-link" href={card.link}>View</a>
        </section>
    

  ) 
}

export default Card