import { createBrowserRouter, RouterProvider} from "react-router-dom"

import HomePage from "./pages/Homepage/HomePage"
import WhoAmI from "./pages/WhoAmIPage/WhoAmI"
import ProjectDetail from "./pages/ProjectDetailPage/ProjectDetail"
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
