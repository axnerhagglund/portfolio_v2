import { createBrowserRouter, RouterProvider} from "react-router-dom"

import HomePage from "./pages/Homepage/HomePage"
import WhoAmI from "./pages/WhoAmIPage/WhoAmI"
import ProjectDetail from "./pages/ProjectDetailPage/ProjectDetail"
import ProjectsShowcase from "./components/ProjectsShowcase/ProjectsShowcase"
import { projects } from "./data"

function MyProjectsPage() {
  return (
    <main className="app home-page">
      <section className="home-projects home-projects--standalone" aria-label="Projects">
        <ProjectsShowcase projects={projects} />
      </section>
    </main>
  )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage />
  },
  {
    path : "/who-am-i",
    element : <WhoAmI />
  },
  {
    path : "/my-projects",
    element : <MyProjectsPage />
  },
  {
    path : "/projects/:slug",
    element : <ProjectDetail />
  }
])
function App() {


  return (

      <RouterProvider router={ router } />

  )
}

export default App
