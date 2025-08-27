import "./cardlist.css"
import Card from "../Card/Card"
function CardList({projects}) {
  return (
    <section className = "card-container-grid">
        {
            projects.map(project => {
                return <Card
                    card={project}
                    key={project.id}
                />
            })
        }
    </section>
  )
}

export default CardList