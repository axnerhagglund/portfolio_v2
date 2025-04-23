import Hero from "../../components/Hero/Hero"
import "./homepage.css"
import {quickInfo} from "../../quickInfoData.js"
import {projects} from "../../data.js"
import CardList from "../../components/CardList/CardList"
import QuickInfoCardList from "../../components/QuickInfoCardList/QuickInfoCardList"
function HomePage() {
  return (
    <>
    <Hero />
    
      {
        projects && <CardList key={projects.id} projects={ projects } />
      }

      {
        quickInfo && <QuickInfoCardList key={quickInfo.id} quickInfo={ quickInfo }/>
      }
        
      
      
    </>
  )
}

export default HomePage