import "./cardlist.css"
import Card from "../../components/Card/Card"
function CardList({projects}) {
  return (
    <section className = "wrapper-flex">
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