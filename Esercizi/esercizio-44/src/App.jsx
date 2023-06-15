import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Counter from "./Counter"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Counter/>}/>
      </Routes>
    </>
  )
}

export default App
