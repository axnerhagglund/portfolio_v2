import "./quickinfocardlist.css"
import QuickInfoCard from "../QuickInfoCard/QuickInfoCard"
function QuickInfoCardList({ quickInfo }) {
  return (
    <section className="wrapper-flex">
        {
            quickInfo.map(infoCard => {
                return <QuickInfoCard
                        infoCard = {infoCard}
                        key = {infoCard.id}
                        />
            })
        }

        
    </section>
  )
}

export default QuickInfoCardList