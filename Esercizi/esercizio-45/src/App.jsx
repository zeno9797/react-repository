import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import GithubUser from "./GithubUser"
import ShowGithubUser from "./ShowGithubUser"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<ShowGithubUser/>}/>
        <Route path="/users:username" element={<ShowGithubUser/>}/>
        <Route path="/:username" element={<GithubUser/>}/>
        
      </Routes>
    </>
  )
}

export default App
