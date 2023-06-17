import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import GithubUser from "./GithubUser"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<GithubUser/>}/>
        <Route path="users" element={<GithubUser/>}/>
      </Routes>
    </>
  )
}

export default App
