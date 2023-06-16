import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import GithubUser from "./GithubUser"
import ShowGithubUser from "./ShowGithubUser"
import GithubUserList from "./GithubUserList"


function App() {


  return (
    <>
      <Routes>
       <Route path="/" element={<GithubUserList/>} />
       <Route path="/users" element={<ShowGithubUser/>}>
        <Route path=":username" element={<GithubUser/>}/>
       </Route>
        
        
      </Routes>
    </>
  )
}

export default App
