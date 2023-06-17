import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import GithubUser from "./GithubUser"
import Home from "./Home"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path=":username" element={<GithubUser/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
