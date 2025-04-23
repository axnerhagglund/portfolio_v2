import { createBrowserRouter, RouterProvider} from "react-router-dom"

import HomePage from "./pages/Homepage/HomePage"
import WhoAmI from "./pages/WhoAmIPage/WhoAmI"
import MyProjectsPage from "./pages/MyProjectsPage/MyProjectsPage"
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
  }
])
function App() {
  

  return (
    <section className="app">
      <RouterProvider router={ router } />
    </section>
  )
}

export default App
